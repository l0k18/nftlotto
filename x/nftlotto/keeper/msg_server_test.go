package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/l0k18/nftlotto/testutil/keeper"
	"github.com/l0k18/nftlotto/x/nftlotto/keeper"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NftlottoKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
