package nftlotto

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/l0k18/nftlotto/testutil/sample"
	nftlottosimulation "github.com/l0k18/nftlotto/x/nftlotto/simulation"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = nftlottosimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateLottery = "op_weight_msg_lottery"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateLottery int = 100

	opWeightMsgUpdateLottery = "op_weight_msg_lottery"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateLottery int = 100

	opWeightMsgDeleteLottery = "op_weight_msg_lottery"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteLottery int = 100

	opWeightMsgCreateTicket = "op_weight_msg_ticket"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTicket int = 100

	opWeightMsgUpdateTicket = "op_weight_msg_ticket"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateTicket int = 100

	opWeightMsgDeleteTicket = "op_weight_msg_ticket"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteTicket int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	nftlottoGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		LotteryList: []types.Lottery{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		LotteryCount: 2,
		TicketList: []types.Ticket{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		TicketCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&nftlottoGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateLottery int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateLottery, &weightMsgCreateLottery, nil,
		func(_ *rand.Rand) {
			weightMsgCreateLottery = defaultWeightMsgCreateLottery
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateLottery,
		nftlottosimulation.SimulateMsgCreateLottery(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateLottery int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateLottery, &weightMsgUpdateLottery, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateLottery = defaultWeightMsgUpdateLottery
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateLottery,
		nftlottosimulation.SimulateMsgUpdateLottery(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteLottery int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteLottery, &weightMsgDeleteLottery, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteLottery = defaultWeightMsgDeleteLottery
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteLottery,
		nftlottosimulation.SimulateMsgDeleteLottery(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTicket int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateTicket, &weightMsgCreateTicket, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTicket = defaultWeightMsgCreateTicket
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTicket,
		nftlottosimulation.SimulateMsgCreateTicket(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateTicket int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateTicket, &weightMsgUpdateTicket, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateTicket = defaultWeightMsgUpdateTicket
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateTicket,
		nftlottosimulation.SimulateMsgUpdateTicket(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteTicket int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteTicket, &weightMsgDeleteTicket, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteTicket = defaultWeightMsgDeleteTicket
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteTicket,
		nftlottosimulation.SimulateMsgDeleteTicket(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
