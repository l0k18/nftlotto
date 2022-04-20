package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateLottery{}, "nftlotto/CreateLottery", nil)
	cdc.RegisterConcrete(&MsgUpdateLottery{}, "nftlotto/UpdateLottery", nil)
	cdc.RegisterConcrete(&MsgDeleteLottery{}, "nftlotto/DeleteLottery", nil)
	cdc.RegisterConcrete(&MsgCreateTicket{}, "nftlotto/CreateTicket", nil)
	cdc.RegisterConcrete(&MsgUpdateTicket{}, "nftlotto/UpdateTicket", nil)
	cdc.RegisterConcrete(&MsgDeleteTicket{}, "nftlotto/DeleteTicket", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateLottery{},
		&MsgUpdateLottery{},
		&MsgDeleteLottery{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTicket{},
		&MsgUpdateTicket{},
		&MsgDeleteTicket{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
