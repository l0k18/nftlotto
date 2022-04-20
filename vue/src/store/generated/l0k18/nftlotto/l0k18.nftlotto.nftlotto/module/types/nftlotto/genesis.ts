/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../nftlotto/params";
import { Lottery } from "../nftlotto/lottery";
import { Ticket } from "../nftlotto/ticket";

export const protobufPackage = "l0k18.nftlotto.nftlotto";

/** GenesisState defines the nftlotto module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  lotteryList: Lottery[];
  lotteryCount: number;
  ticketList: Ticket[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  ticketCount: number;
}

const baseGenesisState: object = { lotteryCount: 0, ticketCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lotteryList) {
      Lottery.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.lotteryCount !== 0) {
      writer.uint32(24).uint64(message.lotteryCount);
    }
    for (const v of message.ticketList) {
      Ticket.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.ticketCount !== 0) {
      writer.uint32(40).uint64(message.ticketCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.lotteryList = [];
    message.ticketList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lotteryList.push(Lottery.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lotteryCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.ticketList.push(Ticket.decode(reader, reader.uint32()));
          break;
        case 5:
          message.ticketCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.lotteryList = [];
    message.ticketList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.lotteryList !== undefined && object.lotteryList !== null) {
      for (const e of object.lotteryList) {
        message.lotteryList.push(Lottery.fromJSON(e));
      }
    }
    if (object.lotteryCount !== undefined && object.lotteryCount !== null) {
      message.lotteryCount = Number(object.lotteryCount);
    } else {
      message.lotteryCount = 0;
    }
    if (object.ticketList !== undefined && object.ticketList !== null) {
      for (const e of object.ticketList) {
        message.ticketList.push(Ticket.fromJSON(e));
      }
    }
    if (object.ticketCount !== undefined && object.ticketCount !== null) {
      message.ticketCount = Number(object.ticketCount);
    } else {
      message.ticketCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.lotteryList) {
      obj.lotteryList = message.lotteryList.map((e) =>
        e ? Lottery.toJSON(e) : undefined
      );
    } else {
      obj.lotteryList = [];
    }
    message.lotteryCount !== undefined &&
      (obj.lotteryCount = message.lotteryCount);
    if (message.ticketList) {
      obj.ticketList = message.ticketList.map((e) =>
        e ? Ticket.toJSON(e) : undefined
      );
    } else {
      obj.ticketList = [];
    }
    message.ticketCount !== undefined &&
      (obj.ticketCount = message.ticketCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.lotteryList = [];
    message.ticketList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.lotteryList !== undefined && object.lotteryList !== null) {
      for (const e of object.lotteryList) {
        message.lotteryList.push(Lottery.fromPartial(e));
      }
    }
    if (object.lotteryCount !== undefined && object.lotteryCount !== null) {
      message.lotteryCount = object.lotteryCount;
    } else {
      message.lotteryCount = 0;
    }
    if (object.ticketList !== undefined && object.ticketList !== null) {
      for (const e of object.ticketList) {
        message.ticketList.push(Ticket.fromPartial(e));
      }
    }
    if (object.ticketCount !== undefined && object.ticketCount !== null) {
      message.ticketCount = object.ticketCount;
    } else {
      message.ticketCount = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
