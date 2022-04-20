package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		LotteryList: []Lottery{},
		TicketList:  []Ticket{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in lottery
	lotteryIdMap := make(map[uint64]bool)
	lotteryCount := gs.GetLotteryCount()
	for _, elem := range gs.LotteryList {
		if _, ok := lotteryIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for lottery")
		}
		if elem.Id >= lotteryCount {
			return fmt.Errorf("lottery id should be lower or equal than the last id")
		}
		lotteryIdMap[elem.Id] = true
	}
	// Check for duplicated ID in ticket
	ticketIdMap := make(map[uint64]bool)
	ticketCount := gs.GetTicketCount()
	for _, elem := range gs.TicketList {
		if _, ok := ticketIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for ticket")
		}
		if elem.Id >= ticketCount {
			return fmt.Errorf("ticket id should be lower or equal than the last id")
		}
		ticketIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
