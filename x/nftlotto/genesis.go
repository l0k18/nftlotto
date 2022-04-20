package nftlotto

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/l0k18/nftlotto/x/nftlotto/keeper"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the lottery
	for _, elem := range genState.LotteryList {
		k.SetLottery(ctx, elem)
	}

	// Set lottery count
	k.SetLotteryCount(ctx, genState.LotteryCount)
	// Set all the ticket
	for _, elem := range genState.TicketList {
		k.SetTicket(ctx, elem)
	}

	// Set ticket count
	k.SetTicketCount(ctx, genState.TicketCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.LotteryList = k.GetAllLottery(ctx)
	genesis.LotteryCount = k.GetLotteryCount(ctx)
	genesis.TicketList = k.GetAllTicket(ctx)
	genesis.TicketCount = k.GetTicketCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
