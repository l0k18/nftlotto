package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TicketAll(c context.Context, req *types.QueryAllTicketRequest) (*types.QueryAllTicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tickets []types.Ticket
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	ticketStore := prefix.NewStore(store, types.KeyPrefix(types.TicketKey))

	pageRes, err := query.Paginate(ticketStore, req.Pagination, func(key []byte, value []byte) error {
		var ticket types.Ticket
		if err := k.cdc.Unmarshal(value, &ticket); err != nil {
			return err
		}

		tickets = append(tickets, ticket)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTicketResponse{Ticket: tickets, Pagination: pageRes}, nil
}

func (k Keeper) Ticket(c context.Context, req *types.QueryGetTicketRequest) (*types.QueryGetTicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	ticket, found := k.GetTicket(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTicketResponse{Ticket: ticket}, nil
}
