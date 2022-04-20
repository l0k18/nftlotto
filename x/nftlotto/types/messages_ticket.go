package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateTicket = "create_ticket"
	TypeMsgUpdateTicket = "update_ticket"
	TypeMsgDeleteTicket = "delete_ticket"
)

var _ sdk.Msg = &MsgCreateTicket{}

func NewMsgCreateTicket(creator string, lottery uint64) *MsgCreateTicket {
	return &MsgCreateTicket{
		Creator: creator,
		Lottery: lottery,
	}
}

func (msg *MsgCreateTicket) Route() string {
	return RouterKey
}

func (msg *MsgCreateTicket) Type() string {
	return TypeMsgCreateTicket
}

func (msg *MsgCreateTicket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTicket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTicket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTicket{}

func NewMsgUpdateTicket(creator string, id uint64, lottery uint64) *MsgUpdateTicket {
	return &MsgUpdateTicket{
		Id:      id,
		Creator: creator,
		Lottery: lottery,
	}
}

func (msg *MsgUpdateTicket) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTicket) Type() string {
	return TypeMsgUpdateTicket
}

func (msg *MsgUpdateTicket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTicket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTicket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteTicket{}

func NewMsgDeleteTicket(creator string, id uint64) *MsgDeleteTicket {
	return &MsgDeleteTicket{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTicket) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTicket) Type() string {
	return TypeMsgDeleteTicket
}

func (msg *MsgDeleteTicket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTicket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTicket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
