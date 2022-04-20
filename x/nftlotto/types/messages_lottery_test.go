package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/l0k18/nftlotto/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateLottery_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateLottery
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateLottery{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateLottery{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateLottery_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateLottery
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateLottery{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateLottery{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteLottery_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteLottery
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteLottery{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteLottery{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
