package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/l0k18/nftlotto/testutil/keeper"
	"github.com/l0k18/nftlotto/testutil/nullify"
	"github.com/l0k18/nftlotto/x/nftlotto/keeper"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
	"github.com/stretchr/testify/require"
)

func createNLottery(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Lottery {
	items := make([]types.Lottery, n)
	for i := range items {
		items[i].Id = keeper.AppendLottery(ctx, items[i])
	}
	return items
}

func TestLotteryGet(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	items := createNLottery(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetLottery(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestLotteryRemove(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	items := createNLottery(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLottery(ctx, item.Id)
		_, found := keeper.GetLottery(ctx, item.Id)
		require.False(t, found)
	}
}

func TestLotteryGetAll(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	items := createNLottery(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllLottery(ctx)),
	)
}

func TestLotteryCount(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	items := createNLottery(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetLotteryCount(ctx))
}
