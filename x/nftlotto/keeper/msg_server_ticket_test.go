package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

func TestTicketMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateTicket(ctx, &types.MsgCreateTicket{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestTicketMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateTicket
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateTicket{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTicket{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTicket{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateTicket(ctx, &types.MsgCreateTicket{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateTicket(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestTicketMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteTicket
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteTicket{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteTicket{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteTicket{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateTicket(ctx, &types.MsgCreateTicket{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteTicket(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
