package nftlotto_test

import (
	"testing"

	keepertest "github.com/l0k18/nftlotto/testutil/keeper"
	"github.com/l0k18/nftlotto/testutil/nullify"
	"github.com/l0k18/nftlotto/x/nftlotto"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		LotteryList: []types.Lottery{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		LotteryCount: 2,
		TicketList: []types.Ticket{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		TicketCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NftlottoKeeper(t)
	nftlotto.InitGenesis(ctx, *k, genesisState)
	got := nftlotto.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.LotteryList, got.LotteryList)
	require.Equal(t, genesisState.LotteryCount, got.LotteryCount)
	require.ElementsMatch(t, genesisState.TicketList, got.TicketList)
	require.Equal(t, genesisState.TicketCount, got.TicketCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
