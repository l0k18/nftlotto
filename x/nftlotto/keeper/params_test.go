package keeper_test

import (
	"testing"

	testkeeper "github.com/l0k18/nftlotto/testutil/keeper"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NftlottoKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
