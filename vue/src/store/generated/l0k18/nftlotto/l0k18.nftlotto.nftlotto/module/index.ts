// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateLottery } from "./types/nftlotto/tx";
import { MsgUpdateTicket } from "./types/nftlotto/tx";
import { MsgUpdateLottery } from "./types/nftlotto/tx";
import { MsgCreateTicket } from "./types/nftlotto/tx";
import { MsgDeleteLottery } from "./types/nftlotto/tx";
import { MsgDeleteTicket } from "./types/nftlotto/tx";


const types = [
  ["/l0k18.nftlotto.nftlotto.MsgCreateLottery", MsgCreateLottery],
  ["/l0k18.nftlotto.nftlotto.MsgUpdateTicket", MsgUpdateTicket],
  ["/l0k18.nftlotto.nftlotto.MsgUpdateLottery", MsgUpdateLottery],
  ["/l0k18.nftlotto.nftlotto.MsgCreateTicket", MsgCreateTicket],
  ["/l0k18.nftlotto.nftlotto.MsgDeleteLottery", MsgDeleteLottery],
  ["/l0k18.nftlotto.nftlotto.MsgDeleteTicket", MsgDeleteTicket],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateLottery: (data: MsgCreateLottery): EncodeObject => ({ typeUrl: "/l0k18.nftlotto.nftlotto.MsgCreateLottery", value: MsgCreateLottery.fromPartial( data ) }),
    msgUpdateTicket: (data: MsgUpdateTicket): EncodeObject => ({ typeUrl: "/l0k18.nftlotto.nftlotto.MsgUpdateTicket", value: MsgUpdateTicket.fromPartial( data ) }),
    msgUpdateLottery: (data: MsgUpdateLottery): EncodeObject => ({ typeUrl: "/l0k18.nftlotto.nftlotto.MsgUpdateLottery", value: MsgUpdateLottery.fromPartial( data ) }),
    msgCreateTicket: (data: MsgCreateTicket): EncodeObject => ({ typeUrl: "/l0k18.nftlotto.nftlotto.MsgCreateTicket", value: MsgCreateTicket.fromPartial( data ) }),
    msgDeleteLottery: (data: MsgDeleteLottery): EncodeObject => ({ typeUrl: "/l0k18.nftlotto.nftlotto.MsgDeleteLottery", value: MsgDeleteLottery.fromPartial( data ) }),
    msgDeleteTicket: (data: MsgDeleteTicket): EncodeObject => ({ typeUrl: "/l0k18.nftlotto.nftlotto.MsgDeleteTicket", value: MsgDeleteTicket.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
