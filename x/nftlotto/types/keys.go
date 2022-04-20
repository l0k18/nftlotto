package types

const (
	// ModuleName defines the module name
	ModuleName = "nftlotto"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_nftlotto"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	LotteryKey      = "Lottery-value-"
	LotteryCountKey = "Lottery-count-"
)

const (
	TicketKey      = "Ticket-value-"
	TicketCountKey = "Ticket-count-"
)
