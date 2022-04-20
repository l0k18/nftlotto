package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateLottery = "create_lottery"
	TypeMsgUpdateLottery = "update_lottery"
	TypeMsgDeleteLottery = "delete_lottery"
)

var _ sdk.Msg = &MsgCreateLottery{}

func NewMsgCreateLottery(creator string, name string, ticketPrice uint64, drawHeight uint64) *MsgCreateLottery {
	return &MsgCreateLottery{
		Creator:     creator,
		Name:        name,
		TicketPrice: ticketPrice,
		DrawHeight:  drawHeight,
	}
}

func (msg *MsgCreateLottery) Route() string {
	return RouterKey
}

func (msg *MsgCreateLottery) Type() string {
	return TypeMsgCreateLottery
}

func (msg *MsgCreateLottery) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateLottery) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateLottery) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateLottery{}

func NewMsgUpdateLottery(creator string, id uint64, name string, ticketPrice uint64, drawHeight uint64) *MsgUpdateLottery {
	return &MsgUpdateLottery{
		Id:          id,
		Creator:     creator,
		Name:        name,
		TicketPrice: ticketPrice,
		DrawHeight:  drawHeight,
	}
}

func (msg *MsgUpdateLottery) Route() string {
	return RouterKey
}

func (msg *MsgUpdateLottery) Type() string {
	return TypeMsgUpdateLottery
}

func (msg *MsgUpdateLottery) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateLottery) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateLottery) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteLottery{}

func NewMsgDeleteLottery(creator string, id uint64) *MsgDeleteLottery {
	return &MsgDeleteLottery{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteLottery) Route() string {
	return RouterKey
}

func (msg *MsgDeleteLottery) Type() string {
	return TypeMsgDeleteLottery
}

func (msg *MsgDeleteLottery) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteLottery) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteLottery) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
