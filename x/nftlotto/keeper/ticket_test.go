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

func createNTicket(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Ticket {
	items := make([]types.Ticket, n)
	for i := range items {
		items[i].Id = keeper.AppendTicket(ctx, items[i])
	}
	return items
}

func TestTicketGet(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	items := createNTicket(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTicket(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestTicketRemove(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	items := createNTicket(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTicket(ctx, item.Id)
		_, found := keeper.GetTicket(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTicketGetAll(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	items := createNTicket(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTicket(ctx)),
	)
}

func TestTicketCount(t *testing.T) {
	keeper, ctx := keepertest.NftlottoKeeper(t)
	items := createNTicket(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTicketCount(ctx))
}
