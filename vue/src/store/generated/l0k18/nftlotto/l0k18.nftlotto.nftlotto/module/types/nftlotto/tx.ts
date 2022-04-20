/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "l0k18.nftlotto.nftlotto";

export interface MsgCreateLottery {
  creator: string;
  name: string;
  ticketPrice: number;
  drawHeight: number;
}

export interface MsgCreateLotteryResponse {
  id: number;
}

export interface MsgUpdateLottery {
  creator: string;
  id: number;
  name: string;
  ticketPrice: number;
  drawHeight: number;
}

export interface MsgUpdateLotteryResponse {}

export interface MsgDeleteLottery {
  creator: string;
  id: number;
}

export interface MsgDeleteLotteryResponse {}

export interface MsgCreateTicket {
  creator: string;
  lottery: number;
}

export interface MsgCreateTicketResponse {
  id: number;
}

export interface MsgUpdateTicket {
  creator: string;
  id: number;
  lottery: number;
}

export interface MsgUpdateTicketResponse {}

export interface MsgDeleteTicket {
  creator: string;
  id: number;
}

export interface MsgDeleteTicketResponse {}

const baseMsgCreateLottery: object = {
  creator: "",
  name: "",
  ticketPrice: 0,
  drawHeight: 0,
};

export const MsgCreateLottery = {
  encode(message: MsgCreateLottery, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateLottery {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateLottery } as MsgCreateLottery;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLottery {
    const message = { ...baseMsgCreateLottery } as MsgCreateLottery;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateLottery): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.ticketPrice !== undefined &&
      (obj.ticketPrice = message.ticketPrice);
    message.drawHeight !== undefined && (obj.drawHeight = message.drawHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateLottery>): MsgCreateLottery {
    const message = { ...baseMsgCreateLottery } as MsgCreateLottery;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateLotteryResponse: object = { id: 0 };

export const MsgCreateLotteryResponse = {
  encode(
    message: MsgCreateLotteryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateLotteryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateLotteryResponse,
    } as MsgCreateLotteryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLotteryResponse {
    const message = {
      ...baseMsgCreateLotteryResponse,
    } as MsgCreateLotteryResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateLotteryResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateLotteryResponse>
  ): MsgCreateLotteryResponse {
    const message = {
      ...baseMsgCreateLotteryResponse,
    } as MsgCreateLotteryResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateLottery: object = {
  creator: "",
  id: 0,
  name: "",
  ticketPrice: 0,
  drawHeight: 0,
};

export const MsgUpdateLottery = {
  encode(message: MsgUpdateLottery, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.ticketPrice !== 0) {
      writer.uint32(32).uint64(message.ticketPrice);
    }
    if (message.drawHeight !== 0) {
      writer.uint32(40).uint64(message.drawHeight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateLottery {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateLottery } as MsgUpdateLottery;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.ticketPrice = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.drawHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateLottery {
    const message = { ...baseMsgUpdateLottery } as MsgUpdateLottery;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateLottery): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.ticketPrice !== undefined &&
      (obj.ticketPrice = message.ticketPrice);
    message.drawHeight !== undefined && (obj.drawHeight = message.drawHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateLottery>): MsgUpdateLottery {
    const message = { ...baseMsgUpdateLottery } as MsgUpdateLottery;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateLotteryResponse: object = {};

export const MsgUpdateLotteryResponse = {
  encode(
    _: MsgUpdateLotteryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateLotteryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateLotteryResponse,
    } as MsgUpdateLotteryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateLotteryResponse {
    const message = {
      ...baseMsgUpdateLotteryResponse,
    } as MsgUpdateLotteryResponse;
    return message;
  },

  toJSON(_: MsgUpdateLotteryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateLotteryResponse>
  ): MsgUpdateLotteryResponse {
    const message = {
      ...baseMsgUpdateLotteryResponse,
    } as MsgUpdateLotteryResponse;
    return message;
  },
};

const baseMsgDeleteLottery: object = { creator: "", id: 0 };

export const MsgDeleteLottery = {
  encode(message: MsgDeleteLottery, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteLottery {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteLottery } as MsgDeleteLottery;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteLottery {
    const message = { ...baseMsgDeleteLottery } as MsgDeleteLottery;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteLottery): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteLottery>): MsgDeleteLottery {
    const message = { ...baseMsgDeleteLottery } as MsgDeleteLottery;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteLotteryResponse: object = {};

export const MsgDeleteLotteryResponse = {
  encode(
    _: MsgDeleteLotteryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteLotteryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteLotteryResponse,
    } as MsgDeleteLotteryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteLotteryResponse {
    const message = {
      ...baseMsgDeleteLotteryResponse,
    } as MsgDeleteLotteryResponse;
    return message;
  },

  toJSON(_: MsgDeleteLotteryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteLotteryResponse>
  ): MsgDeleteLotteryResponse {
    const message = {
      ...baseMsgDeleteLotteryResponse,
    } as MsgDeleteLotteryResponse;
    return message;
  },
};

const baseMsgCreateTicket: object = { creator: "", lottery: 0 };

export const MsgCreateTicket = {
  encode(message: MsgCreateTicket, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.lottery !== 0) {
      writer.uint32(16).uint64(message.lottery);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTicket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTicket } as MsgCreateTicket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.lottery = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTicket {
    const message = { ...baseMsgCreateTicket } as MsgCreateTicket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.lottery !== undefined && object.lottery !== null) {
      message.lottery = Number(object.lottery);
    } else {
      message.lottery = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTicket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.lottery !== undefined && (obj.lottery = message.lottery);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTicket>): MsgCreateTicket {
    const message = { ...baseMsgCreateTicket } as MsgCreateTicket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.lottery !== undefined && object.lottery !== null) {
      message.lottery = object.lottery;
    } else {
      message.lottery = 0;
    }
    return message;
  },
};

const baseMsgCreateTicketResponse: object = { id: 0 };

export const MsgCreateTicketResponse = {
  encode(
    message: MsgCreateTicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateTicketResponse,
    } as MsgCreateTicketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTicketResponse {
    const message = {
      ...baseMsgCreateTicketResponse,
    } as MsgCreateTicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTicketResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTicketResponse>
  ): MsgCreateTicketResponse {
    const message = {
      ...baseMsgCreateTicketResponse,
    } as MsgCreateTicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateTicket: object = { creator: "", id: 0, lottery: 0 };

export const MsgUpdateTicket = {
  encode(message: MsgUpdateTicket, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.lottery !== 0) {
      writer.uint32(24).uint64(message.lottery);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTicket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTicket } as MsgUpdateTicket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lottery = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTicket {
    const message = { ...baseMsgUpdateTicket } as MsgUpdateTicket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.lottery !== undefined && object.lottery !== null) {
      message.lottery = Number(object.lottery);
    } else {
      message.lottery = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateTicket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.lottery !== undefined && (obj.lottery = message.lottery);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateTicket>): MsgUpdateTicket {
    const message = { ...baseMsgUpdateTicket } as MsgUpdateTicket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.lottery !== undefined && object.lottery !== null) {
      message.lottery = object.lottery;
    } else {
      message.lottery = 0;
    }
    return message;
  },
};

const baseMsgUpdateTicketResponse: object = {};

export const MsgUpdateTicketResponse = {
  encode(_: MsgUpdateTicketResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTicketResponse,
    } as MsgUpdateTicketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateTicketResponse {
    const message = {
      ...baseMsgUpdateTicketResponse,
    } as MsgUpdateTicketResponse;
    return message;
  },

  toJSON(_: MsgUpdateTicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTicketResponse>
  ): MsgUpdateTicketResponse {
    const message = {
      ...baseMsgUpdateTicketResponse,
    } as MsgUpdateTicketResponse;
    return message;
  },
};

const baseMsgDeleteTicket: object = { creator: "", id: 0 };

export const MsgDeleteTicket = {
  encode(message: MsgDeleteTicket, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTicket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTicket } as MsgDeleteTicket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteTicket {
    const message = { ...baseMsgDeleteTicket } as MsgDeleteTicket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteTicket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteTicket>): MsgDeleteTicket {
    const message = { ...baseMsgDeleteTicket } as MsgDeleteTicket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteTicketResponse: object = {};

export const MsgDeleteTicketResponse = {
  encode(_: MsgDeleteTicketResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteTicketResponse,
    } as MsgDeleteTicketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteTicketResponse {
    const message = {
      ...baseMsgDeleteTicketResponse,
    } as MsgDeleteTicketResponse;
    return message;
  },

  toJSON(_: MsgDeleteTicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteTicketResponse>
  ): MsgDeleteTicketResponse {
    const message = {
      ...baseMsgDeleteTicketResponse,
    } as MsgDeleteTicketResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateLottery(request: MsgCreateLottery): Promise<MsgCreateLotteryResponse>;
  UpdateLottery(request: MsgUpdateLottery): Promise<MsgUpdateLotteryResponse>;
  DeleteLottery(request: MsgDeleteLottery): Promise<MsgDeleteLotteryResponse>;
  CreateTicket(request: MsgCreateTicket): Promise<MsgCreateTicketResponse>;
  UpdateTicket(request: MsgUpdateTicket): Promise<MsgUpdateTicketResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteTicket(request: MsgDeleteTicket): Promise<MsgDeleteTicketResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateLottery(request: MsgCreateLottery): Promise<MsgCreateLotteryResponse> {
    const data = MsgCreateLottery.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Msg",
      "CreateLottery",
      data
    );
    return promise.then((data) =>
      MsgCreateLotteryResponse.decode(new Reader(data))
    );
  }

  UpdateLottery(request: MsgUpdateLottery): Promise<MsgUpdateLotteryResponse> {
    const data = MsgUpdateLottery.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Msg",
      "UpdateLottery",
      data
    );
    return promise.then((data) =>
      MsgUpdateLotteryResponse.decode(new Reader(data))
    );
  }

  DeleteLottery(request: MsgDeleteLottery): Promise<MsgDeleteLotteryResponse> {
    const data = MsgDeleteLottery.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Msg",
      "DeleteLottery",
      data
    );
    return promise.then((data) =>
      MsgDeleteLotteryResponse.decode(new Reader(data))
    );
  }

  CreateTicket(request: MsgCreateTicket): Promise<MsgCreateTicketResponse> {
    const data = MsgCreateTicket.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Msg",
      "CreateTicket",
      data
    );
    return promise.then((data) =>
      MsgCreateTicketResponse.decode(new Reader(data))
    );
  }

  UpdateTicket(request: MsgUpdateTicket): Promise<MsgUpdateTicketResponse> {
    const data = MsgUpdateTicket.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Msg",
      "UpdateTicket",
      data
    );
    return promise.then((data) =>
      MsgUpdateTicketResponse.decode(new Reader(data))
    );
  }

  DeleteTicket(request: MsgDeleteTicket): Promise<MsgDeleteTicketResponse> {
    const data = MsgDeleteTicket.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Msg",
      "DeleteTicket",
      data
    );
    return promise.then((data) =>
      MsgDeleteTicketResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
