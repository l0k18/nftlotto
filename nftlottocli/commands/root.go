package commands

import (
	"github.com/l0k18/nftlotto/config"
	"github.com/l0k18/nftlotto/libs/cli"
	"github.com/l0k18/nftlotto/libs/log"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// ParseConfig retrieves the default environment configuration
func ParseConfig(conf *config.Config) (*config.Config, error) {
	if err := viper.Unmarshal(conf); err != nil {
		return nil, err
	}

	return conf, nil
}

// RootCommand constructs the root command-line entry point for Tendermint core.
func RootCommand(conf *config.Config, logger log.Logger) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "lottery",
		Short: "Cosmos application for simple Lottery",
		PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
			if cmd.Name() == VersionCmd.Name() {
				return nil
			}
			return nil
		},
	}
	cmd.PersistentFlags().Bool(cli.TraceFlag, false,
		"print out full stack trace on errors",
	)
	cmd.PersistentFlags().String("log-level", conf.LogLevel, "log level")
	cobra.OnInitialize(func() { cli.InitEnv("NFTLOTTO") })
	return cmd
}
