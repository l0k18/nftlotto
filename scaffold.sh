#!/bin/bash

# this gives us ISO8601 date formats suitable as folder names
ARCHIVE="./old/$(date '+%FT%T%:z')"
mkdir -p $ARCHIVE
mv app cmd config.yml docs go.mod go.sum proto readme.md testutil vue x \
  .github $ARCHIVE/
ignite scaffold chain github.com/l0k18/nftlotto --no-module -p ..
ignite scaffold module nftlotto --dep bank
ignite scaffold list lottery name:string ticketPrice:uint drawHeight:uint
ignite scaffold list ticket lottery:uint
