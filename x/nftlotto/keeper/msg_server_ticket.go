package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

func (k msgServer) CreateTicket(goCtx context.Context, msg *types.MsgCreateTicket) (*types.MsgCreateTicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var ticket = types.Ticket{
		Creator: msg.Creator,
		Lottery: msg.Lottery,
	}

	id := k.AppendTicket(
		ctx,
		ticket,
	)

	return &types.MsgCreateTicketResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTicket(goCtx context.Context, msg *types.MsgUpdateTicket) (*types.MsgUpdateTicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var ticket = types.Ticket{
		Creator: msg.Creator,
		Id:      msg.Id,
		Lottery: msg.Lottery,
	}

	// Checks that the element exists
	val, found := k.GetTicket(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTicket(ctx, ticket)

	return &types.MsgUpdateTicketResponse{}, nil
}

func (k msgServer) DeleteTicket(goCtx context.Context, msg *types.MsgDeleteTicket) (*types.MsgDeleteTicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetTicket(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTicket(ctx, msg.Id)

	return &types.MsgDeleteTicketResponse{}, nil
}
