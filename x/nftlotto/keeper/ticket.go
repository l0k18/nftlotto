package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

// GetTicketCount get the total number of ticket
func (k Keeper) GetTicketCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TicketCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetTicketCount set the total number of ticket
func (k Keeper) SetTicketCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TicketCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendTicket appends a ticket in the store with a new id and update the count
func (k Keeper) AppendTicket(
	ctx sdk.Context,
	ticket types.Ticket,
) uint64 {
	// Create the ticket
	count := k.GetTicketCount(ctx)

	// Set the ID of the appended value
	ticket.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TicketKey))
	appendedValue := k.cdc.MustMarshal(&ticket)
	store.Set(GetTicketIDBytes(ticket.Id), appendedValue)

	// Update ticket count
	k.SetTicketCount(ctx, count+1)

	return count
}

// SetTicket set a specific ticket in the store
func (k Keeper) SetTicket(ctx sdk.Context, ticket types.Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TicketKey))
	b := k.cdc.MustMarshal(&ticket)
	store.Set(GetTicketIDBytes(ticket.Id), b)
}

// GetTicket returns a ticket from its id
func (k Keeper) GetTicket(ctx sdk.Context, id uint64) (val types.Ticket, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TicketKey))
	b := store.Get(GetTicketIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTicket removes a ticket from the store
func (k Keeper) RemoveTicket(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TicketKey))
	store.Delete(GetTicketIDBytes(id))
}

// GetAllTicket returns all ticket
func (k Keeper) GetAllTicket(ctx sdk.Context) (list []types.Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TicketKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Ticket
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTicketIDBytes returns the byte representation of the ID
func GetTicketIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTicketIDFromBytes returns ID in uint64 format from a byte array
func GetTicketIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
