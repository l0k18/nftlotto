package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/l0k18/nftlotto/testutil/keeper"
	"github.com/l0k18/nftlotto/testutil/nullify"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

func TestLotteryQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNLottery(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetLotteryRequest
		response *types.QueryGetLotteryResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetLotteryRequest{Id: msgs[0].Id},
			response: &types.QueryGetLotteryResponse{Lottery: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetLotteryRequest{Id: msgs[1].Id},
			response: &types.QueryGetLotteryResponse{Lottery: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetLotteryRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Lottery(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestLotteryQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNLottery(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllLotteryRequest {
		return &types.QueryAllLotteryRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.LotteryAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Lottery), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Lottery),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.LotteryAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Lottery), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Lottery),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.LotteryAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Lottery),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.LotteryAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
