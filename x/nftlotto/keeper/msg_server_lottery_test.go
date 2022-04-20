package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

func TestLotteryMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateLottery(ctx, &types.MsgCreateLottery{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestLotteryMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateLottery
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateLottery{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateLottery{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateLottery{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateLottery(ctx, &types.MsgCreateLottery{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateLottery(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestLotteryMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteLottery
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteLottery{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteLottery{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteLottery{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateLottery(ctx, &types.MsgCreateLottery{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteLottery(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
