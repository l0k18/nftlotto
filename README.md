# nftlotto

A simple lottery that a user can create a lottery with a name and deadline, at
which point a random selection will generate a selection based on the combined
ticket identifiers (NFTs) at the deadline time, distribute 50% to the winning
ticket buyer and 50% to the lottery creator.

This is a simple example of a Cosmos SDK based blockchain application. With IBC
enabled this can work with any of the tokens connected to the Cosmos blockchain
as the purchasing token but for this demonstration it is its own simple
sovereign currency.

## Build and Run:

First, you need to have a properly configured Go installation with `$GOBIN`
defined.
[This guide will show you how to set this up](https://github.com/quanterall/kitchensink#prerequisites).

You need to have ignite installed, for that, see
[here](https://docs.ignite.com/guide/install.html). This will place ignite
in `/usr/local/bin`:

    sudo curl https://get.ignite.com/cli@v0.20.4! | sudo bash

Then, to start the application:

    ignite chain serve

For the purposes of this task the binary will be made available in release so no
other configurations are required to assess the application.

## ignite commands used to create this

    ignite scaffold chain github.com/l0k18/nftlotteo --no-module
    cd nftlotto
    ignite scaffold module nftlotto --dep bank
    ignite scaffold list lottery name:string ticketPrice:uint drawHeight:uint
    ignite scaffold list ticket lottery:uint

> note: go's `time.Time` is an int64 but the `int` type in ignite gives an int32
> hence the use of uint for datestamps which don't have the 2038 problem. 
