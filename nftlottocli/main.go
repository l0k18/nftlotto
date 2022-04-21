package main

import (
	"context"
	"github.com/l0k18/nftlotto/config"
	"github.com/l0k18/nftlotto/libs/cli"
	"github.com/l0k18/nftlotto/libs/log"
	"github.com/l0k18/nftlotto/nftlottocli/commands"
	stdlog "log"

	"github.com/ignite-hq/cli/ignite/pkg/cosmosclient"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
)

var _ types.Lottery

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// create an instance of cosmosclient
	cosmos, err := cosmosclient.New(context.Background())
	if err != nil {
		stdlog.Fatal(err)
	}

	conf, err := commands.ParseConfig(config.DefaultConfig())
	if err != nil {
		panic(err)
	}

	logger, err := log.NewDefaultLogger(conf.LogFormat, conf.LogLevel)
	if err != nil {
		panic(err)
	}

	rcmd := commands.RootCommand(conf, logger)

	if err := cli.RunWithTrace(ctx, rcmd); err != nil {
		panic(err)
	}

	// account `alice` was initialized during `ignite chain serve`
	accountName := "alice"

	// get account from the keyring by account name and return a bech32 address
	address, err := cosmos.Address(accountName)
	if err != nil {
		stdlog.Fatal(err)
	}
	stdlog.Println("alice", address)
}
