package types_test

import (
	"testing"

	"github.com/l0k18/nftlotto/x/nftlotto/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				LotteryList: []types.Lottery{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				LotteryCount: 2,
				TicketList: []types.Ticket{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				TicketCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated lottery",
			genState: &types.GenesisState{
				LotteryList: []types.Lottery{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid lottery count",
			genState: &types.GenesisState{
				LotteryList: []types.Lottery{
					{
						Id: 1,
					},
				},
				LotteryCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated ticket",
			genState: &types.GenesisState{
				TicketList: []types.Ticket{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid ticket count",
			genState: &types.GenesisState{
				TicketList: []types.Ticket{
					{
						Id: 1,
					},
				},
				TicketCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
