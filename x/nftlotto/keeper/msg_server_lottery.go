package keeper

import (
	"context"
	"errors"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

func (k msgServer) CreateLottery(
	goCtx context.Context,
	msg *types.MsgCreateLottery,
) (resp *types.MsgCreateLotteryResponse, err error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	// to create a lottery the creator must pay one token
	var addr sdk.AccAddress
	addr, err = sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return
	}
	spendable := k.bankKeeper.SpendableCoins(ctx, addr)
	minprice := sdk.Coins{sdk.NewInt64Coin("token", 10)}
	if spendable.IsAllLT(minprice) {
		return nil, errors.New("insufficient funds to start a lottery, 10 required")
	}

	err = k.bankKeeper.SendCoinsFromAccountToModule(ctx, addr, "nftlotto",
		minprice,
	)
	if err != nil {
		return nil, err
	}

	var lottery = types.Lottery{
		Creator:     msg.Creator,
		Name:        msg.Name,
		TicketPrice: msg.TicketPrice,
		DrawHeight:  msg.DrawHeight,
	}

	id := k.AppendLottery(
		ctx,
		lottery,
	)

	return &types.MsgCreateLotteryResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateLottery(goCtx context.Context,
	msg *types.MsgUpdateLottery,
) (*types.MsgUpdateLotteryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var lottery = types.Lottery{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Name:        msg.Name,
		TicketPrice: msg.TicketPrice,
		DrawHeight:  msg.DrawHeight,
	}

	// Checks that the element exists
	val, found := k.GetLottery(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound,
			fmt.Sprintf("key %d doesn't exist", msg.Id),
		)
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetLottery(ctx, lottery)

	return &types.MsgUpdateLotteryResponse{}, nil
}

func (k msgServer) DeleteLottery(goCtx context.Context,
	msg *types.MsgDeleteLottery,
) (*types.MsgDeleteLotteryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetLottery(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound,
			fmt.Sprintf("key %d doesn't exist", msg.Id),
		)
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveLottery(ctx, msg.Id)

	return &types.MsgDeleteLotteryResponse{}, nil
}
