/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "l0k18.nftlotto.nftlotto";

export interface Lottery {
  id: number;
  name: string;
  ticketPrice: number;
  drawHeight: number;
  creator: string;
}

const baseLottery: object = {
  id: 0,
  name: "",
  ticketPrice: 0,
  drawHeight: 0,
  creator: "",
};

export const Lottery = {
  encode(message: Lottery, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.ticketPrice !== 0) {
      writer.uint32(24).uint64(message.ticketPrice);
    }
    if (message.drawHeight !== 0) {
      writer.uint32(32).uint64(message.drawHeight);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Lottery {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLottery } as Lottery;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.ticketPrice = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.drawHeight = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Lottery {
    const message = { ...baseLottery } as Lottery;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.ticketPrice !== undefined && object.ticketPrice !== null) {
      message.ticketPrice = Number(object.ticketPrice);
    } else {
      message.ticketPrice = 0;
    }
    if (object.drawHeight !== undefined && object.drawHeight !== null) {
      message.drawHeight = Number(object.drawHeight);
    } else {
      message.drawHeight = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Lottery): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.ticketPrice !== undefined &&
      (obj.ticketPrice = message.ticketPrice);
    message.drawHeight !== undefined && (obj.drawHeight = message.drawHeight);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Lottery>): Lottery {
    const message = { ...baseLottery } as Lottery;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.ticketPrice !== undefined && object.ticketPrice !== null) {
      message.ticketPrice = object.ticketPrice;
    } else {
      message.ticketPrice = 0;
    }
    if (object.drawHeight !== undefined && object.drawHeight !== null) {
      message.drawHeight = object.drawHeight;
    } else {
      message.drawHeight = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
