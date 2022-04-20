package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/l0k18/nftlotto/x/nftlotto/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateLottery() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-lottery [name] [ticket-price] [draw-height]",
		Short: "Create a new lottery",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argTicketPrice, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argDrawHeight, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateLottery(clientCtx.GetFromAddress().String(), argName, argTicketPrice, argDrawHeight)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateLottery() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-lottery [id] [name] [ticket-price] [draw-height]",
		Short: "Update a lottery",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argName := args[1]

			argTicketPrice, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			argDrawHeight, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateLottery(clientCtx.GetFromAddress().String(), id, argName, argTicketPrice, argDrawHeight)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteLottery() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-lottery [id]",
		Short: "Delete a lottery by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteLottery(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
