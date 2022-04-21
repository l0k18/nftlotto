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

## Accelerate redoing the scaffold

There is a script in [scaffold.sh](scaffold.sh) which automatically reruns 
the scaffolding and archives the existing stuff inside a `.gitignore`d 
folder `old`. After running this, any changes you made to implement the 
application can be reverted by rolling back the changes for the individual 
files, or copied back over from the `old/` directory's copy of the repository.

When additional scaffold tasks are required, they can be added to the 
`scaffold.sh` file and will be repeated in case of needing to roll 
everything back.
