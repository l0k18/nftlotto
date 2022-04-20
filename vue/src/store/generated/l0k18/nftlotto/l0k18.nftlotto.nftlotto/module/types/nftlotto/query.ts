/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../nftlotto/params";
import { Lottery } from "../nftlotto/lottery";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Ticket } from "../nftlotto/ticket";

export const protobufPackage = "l0k18.nftlotto.nftlotto";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetLotteryRequest {
  id: number;
}

export interface QueryGetLotteryResponse {
  Lottery: Lottery | undefined;
}

export interface QueryAllLotteryRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLotteryResponse {
  Lottery: Lottery[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTicketRequest {
  id: number;
}

export interface QueryGetTicketResponse {
  Ticket: Ticket | undefined;
}

export interface QueryAllTicketRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTicketResponse {
  Ticket: Ticket[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetLotteryRequest: object = { id: 0 };

export const QueryGetLotteryRequest = {
  encode(
    message: QueryGetLotteryRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLotteryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLotteryRequest } as QueryGetLotteryRequest;
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

  fromJSON(object: any): QueryGetLotteryRequest {
    const message = { ...baseQueryGetLotteryRequest } as QueryGetLotteryRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetLotteryRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLotteryRequest>
  ): QueryGetLotteryRequest {
    const message = { ...baseQueryGetLotteryRequest } as QueryGetLotteryRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetLotteryResponse: object = {};

export const QueryGetLotteryResponse = {
  encode(
    message: QueryGetLotteryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Lottery !== undefined) {
      Lottery.encode(message.Lottery, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLotteryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLotteryResponse,
    } as QueryGetLotteryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Lottery = Lottery.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLotteryResponse {
    const message = {
      ...baseQueryGetLotteryResponse,
    } as QueryGetLotteryResponse;
    if (object.Lottery !== undefined && object.Lottery !== null) {
      message.Lottery = Lottery.fromJSON(object.Lottery);
    } else {
      message.Lottery = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLotteryResponse): unknown {
    const obj: any = {};
    message.Lottery !== undefined &&
      (obj.Lottery = message.Lottery
        ? Lottery.toJSON(message.Lottery)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLotteryResponse>
  ): QueryGetLotteryResponse {
    const message = {
      ...baseQueryGetLotteryResponse,
    } as QueryGetLotteryResponse;
    if (object.Lottery !== undefined && object.Lottery !== null) {
      message.Lottery = Lottery.fromPartial(object.Lottery);
    } else {
      message.Lottery = undefined;
    }
    return message;
  },
};

const baseQueryAllLotteryRequest: object = {};

export const QueryAllLotteryRequest = {
  encode(
    message: QueryAllLotteryRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLotteryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLotteryRequest } as QueryAllLotteryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLotteryRequest {
    const message = { ...baseQueryAllLotteryRequest } as QueryAllLotteryRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLotteryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLotteryRequest>
  ): QueryAllLotteryRequest {
    const message = { ...baseQueryAllLotteryRequest } as QueryAllLotteryRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLotteryResponse: object = {};

export const QueryAllLotteryResponse = {
  encode(
    message: QueryAllLotteryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Lottery) {
      Lottery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLotteryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLotteryResponse,
    } as QueryAllLotteryResponse;
    message.Lottery = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Lottery.push(Lottery.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLotteryResponse {
    const message = {
      ...baseQueryAllLotteryResponse,
    } as QueryAllLotteryResponse;
    message.Lottery = [];
    if (object.Lottery !== undefined && object.Lottery !== null) {
      for (const e of object.Lottery) {
        message.Lottery.push(Lottery.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLotteryResponse): unknown {
    const obj: any = {};
    if (message.Lottery) {
      obj.Lottery = message.Lottery.map((e) =>
        e ? Lottery.toJSON(e) : undefined
      );
    } else {
      obj.Lottery = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLotteryResponse>
  ): QueryAllLotteryResponse {
    const message = {
      ...baseQueryAllLotteryResponse,
    } as QueryAllLotteryResponse;
    message.Lottery = [];
    if (object.Lottery !== undefined && object.Lottery !== null) {
      for (const e of object.Lottery) {
        message.Lottery.push(Lottery.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTicketRequest: object = { id: 0 };

export const QueryGetTicketRequest = {
  encode(
    message: QueryGetTicketRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTicketRequest } as QueryGetTicketRequest;
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

  fromJSON(object: any): QueryGetTicketRequest {
    const message = { ...baseQueryGetTicketRequest } as QueryGetTicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTicketRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTicketRequest>
  ): QueryGetTicketRequest {
    const message = { ...baseQueryGetTicketRequest } as QueryGetTicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetTicketResponse: object = {};

export const QueryGetTicketResponse = {
  encode(
    message: QueryGetTicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Ticket !== undefined) {
      Ticket.encode(message.Ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTicketResponse } as QueryGetTicketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Ticket = Ticket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTicketResponse {
    const message = { ...baseQueryGetTicketResponse } as QueryGetTicketResponse;
    if (object.Ticket !== undefined && object.Ticket !== null) {
      message.Ticket = Ticket.fromJSON(object.Ticket);
    } else {
      message.Ticket = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTicketResponse): unknown {
    const obj: any = {};
    message.Ticket !== undefined &&
      (obj.Ticket = message.Ticket ? Ticket.toJSON(message.Ticket) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTicketResponse>
  ): QueryGetTicketResponse {
    const message = { ...baseQueryGetTicketResponse } as QueryGetTicketResponse;
    if (object.Ticket !== undefined && object.Ticket !== null) {
      message.Ticket = Ticket.fromPartial(object.Ticket);
    } else {
      message.Ticket = undefined;
    }
    return message;
  },
};

const baseQueryAllTicketRequest: object = {};

export const QueryAllTicketRequest = {
  encode(
    message: QueryAllTicketRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTicketRequest } as QueryAllTicketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTicketRequest {
    const message = { ...baseQueryAllTicketRequest } as QueryAllTicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTicketRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTicketRequest>
  ): QueryAllTicketRequest {
    const message = { ...baseQueryAllTicketRequest } as QueryAllTicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTicketResponse: object = {};

export const QueryAllTicketResponse = {
  encode(
    message: QueryAllTicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Ticket) {
      Ticket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTicketResponse } as QueryAllTicketResponse;
    message.Ticket = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Ticket.push(Ticket.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTicketResponse {
    const message = { ...baseQueryAllTicketResponse } as QueryAllTicketResponse;
    message.Ticket = [];
    if (object.Ticket !== undefined && object.Ticket !== null) {
      for (const e of object.Ticket) {
        message.Ticket.push(Ticket.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTicketResponse): unknown {
    const obj: any = {};
    if (message.Ticket) {
      obj.Ticket = message.Ticket.map((e) =>
        e ? Ticket.toJSON(e) : undefined
      );
    } else {
      obj.Ticket = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTicketResponse>
  ): QueryAllTicketResponse {
    const message = { ...baseQueryAllTicketResponse } as QueryAllTicketResponse;
    message.Ticket = [];
    if (object.Ticket !== undefined && object.Ticket !== null) {
      for (const e of object.Ticket) {
        message.Ticket.push(Ticket.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Lottery by id. */
  Lottery(request: QueryGetLotteryRequest): Promise<QueryGetLotteryResponse>;
  /** Queries a list of Lottery items. */
  LotteryAll(request: QueryAllLotteryRequest): Promise<QueryAllLotteryResponse>;
  /** Queries a Ticket by id. */
  Ticket(request: QueryGetTicketRequest): Promise<QueryGetTicketResponse>;
  /** Queries a list of Ticket items. */
  TicketAll(request: QueryAllTicketRequest): Promise<QueryAllTicketResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Lottery(request: QueryGetLotteryRequest): Promise<QueryGetLotteryResponse> {
    const data = QueryGetLotteryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Query",
      "Lottery",
      data
    );
    return promise.then((data) =>
      QueryGetLotteryResponse.decode(new Reader(data))
    );
  }

  LotteryAll(
    request: QueryAllLotteryRequest
  ): Promise<QueryAllLotteryResponse> {
    const data = QueryAllLotteryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Query",
      "LotteryAll",
      data
    );
    return promise.then((data) =>
      QueryAllLotteryResponse.decode(new Reader(data))
    );
  }

  Ticket(request: QueryGetTicketRequest): Promise<QueryGetTicketResponse> {
    const data = QueryGetTicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Query",
      "Ticket",
      data
    );
    return promise.then((data) =>
      QueryGetTicketResponse.decode(new Reader(data))
    );
  }

  TicketAll(request: QueryAllTicketRequest): Promise<QueryAllTicketResponse> {
    const data = QueryAllTicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "l0k18.nftlotto.nftlotto.Query",
      "TicketAll",
      data
    );
    return promise.then((data) =>
      QueryAllTicketResponse.decode(new Reader(data))
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
