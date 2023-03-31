/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IModuleCalls {
  export type TransactionStruct = {
    callType: PromiseOrValue<BigNumberish>;
    revertOnError: PromiseOrValue<boolean>;
    gasLimit: PromiseOrValue<BigNumberish>;
    target: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
  };

  export type TransactionStructOutput = [
    number,
    boolean,
    BigNumber,
    string,
    BigNumber,
    string
  ] & {
    callType: number;
    revertOnError: boolean;
    gasLimit: BigNumber;
    target: string;
    value: BigNumber;
    data: string;
  };
}

export interface UserWalletInterface extends utils.Interface {
  functions: {
    "FACTORY()": FunctionFragment;
    "INIT_CODE_HASH()": FunctionFragment;
    "JWTAUTH_ADDR()": FunctionFragment;
    "SIGVERSION()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "addHook(bytes4,address)": FunctionFragment;
    "addLocalSigner(address,uint256)": FunctionFragment;
    "delLocalSigner(address)": FunctionFragment;
    "fakeInvoke((uint8,bool,uint256,address,uint256,bytes)[])": FunctionFragment;
    "getImplementation()": FunctionFragment;
    "getJwtAuthAddress()": FunctionFragment;
    "hashNonceOrder((uint8,bool,uint256,address,uint256,bytes)[],uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "invoke((uint8,bool,uint256,address,uint256,bytes)[],uint256,bytes)": FunctionFragment;
    "isVaildJwt(bytes32,bytes)": FunctionFragment;
    "isValidSignature(bytes32,bytes)": FunctionFragment;
    "isValidSigner(address)": FunctionFragment;
    "nonce()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "querySigner(address)": FunctionFragment;
    "readHook(bytes4)": FunctionFragment;
    "readNonce(uint256)": FunctionFragment;
    "removeHook(bytes4)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateImplementation(address)": FunctionFragment;
    "updateJwtAuthAddress(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FACTORY"
      | "INIT_CODE_HASH"
      | "JWTAUTH_ADDR"
      | "SIGVERSION"
      | "VERSION"
      | "addHook"
      | "addLocalSigner"
      | "delLocalSigner"
      | "fakeInvoke"
      | "getImplementation"
      | "getJwtAuthAddress"
      | "hashNonceOrder"
      | "initialize"
      | "invoke"
      | "isVaildJwt"
      | "isValidSignature"
      | "isValidSigner"
      | "nonce"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "querySigner"
      | "readHook"
      | "readNonce"
      | "removeHook"
      | "supportsInterface"
      | "updateImplementation"
      | "updateJwtAuthAddress"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "FACTORY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "INIT_CODE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "JWTAUTH_ADDR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SIGVERSION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addHook",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addLocalSigner",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "delLocalSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "fakeInvoke",
    values: [IModuleCalls.TransactionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getJwtAuthAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hashNonceOrder",
    values: [IModuleCalls.TransactionStruct[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "invoke",
    values: [
      IModuleCalls.TransactionStruct[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isVaildJwt",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "querySigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "readHook",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "readNonce",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeHook",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateImplementation",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateJwtAuthAddress",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "FACTORY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "INIT_CODE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "JWTAUTH_ADDR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SIGVERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addHook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addLocalSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delLocalSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fakeInvoke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getJwtAuthAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashNonceOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "invoke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isVaildJwt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "querySigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "readHook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeHook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateJwtAuthAddress",
    data: BytesLike
  ): Result;

  events: {
    "EthReceived(address,uint256)": EventFragment;
    "ImplementationUpdated(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "NonceChange(uint256,uint256)": EventFragment;
    "SignerAdded(address,uint256)": EventFragment;
    "SignerDeled(address)": EventFragment;
    "TxExecutedEvent(bytes32,uint256)": EventFragment;
    "TxFailedEvent(bytes32,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EthReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImplementationUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NonceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerDeled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxExecutedEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxFailedEvent"): EventFragment;
}

export interface EthReceivedEventObject {
  arg0: string;
  arg1: BigNumber;
}
export type EthReceivedEvent = TypedEvent<
  [string, BigNumber],
  EthReceivedEventObject
>;

export type EthReceivedEventFilter = TypedEventFilter<EthReceivedEvent>;

export interface ImplementationUpdatedEventObject {
  newImplementation: string;
}
export type ImplementationUpdatedEvent = TypedEvent<
  [string],
  ImplementationUpdatedEventObject
>;

export type ImplementationUpdatedEventFilter =
  TypedEventFilter<ImplementationUpdatedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface NonceChangeEventObject {
  _space: BigNumber;
  _newNonce: BigNumber;
}
export type NonceChangeEvent = TypedEvent<
  [BigNumber, BigNumber],
  NonceChangeEventObject
>;

export type NonceChangeEventFilter = TypedEventFilter<NonceChangeEvent>;

export interface SignerAddedEventObject {
  signer: string;
  expiration: BigNumber;
}
export type SignerAddedEvent = TypedEvent<
  [string, BigNumber],
  SignerAddedEventObject
>;

export type SignerAddedEventFilter = TypedEventFilter<SignerAddedEvent>;

export interface SignerDeledEventObject {
  signer: string;
}
export type SignerDeledEvent = TypedEvent<[string], SignerDeledEventObject>;

export type SignerDeledEventFilter = TypedEventFilter<SignerDeledEvent>;

export interface TxExecutedEventEventObject {
  _txHash: string;
  _index: BigNumber;
}
export type TxExecutedEventEvent = TypedEvent<
  [string, BigNumber],
  TxExecutedEventEventObject
>;

export type TxExecutedEventEventFilter = TypedEventFilter<TxExecutedEventEvent>;

export interface TxFailedEventEventObject {
  _txHash: string;
  _index: BigNumber;
  _reason: string;
}
export type TxFailedEventEvent = TypedEvent<
  [string, BigNumber, string],
  TxFailedEventEventObject
>;

export type TxFailedEventEventFilter = TypedEventFilter<TxFailedEventEvent>;

export interface UserWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserWalletInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FACTORY(overrides?: CallOverrides): Promise<[string]>;

    INIT_CODE_HASH(overrides?: CallOverrides): Promise<[string]>;

    JWTAUTH_ADDR(overrides?: CallOverrides): Promise<[string]>;

    SIGVERSION(overrides?: CallOverrides): Promise<[number]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    addHook(
      _signature: PromiseOrValue<BytesLike>,
      _implementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addLocalSigner(
      _addr: PromiseOrValue<string>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delLocalSigner(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fakeInvoke(
      _txs: IModuleCalls.TransactionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<[string]>;

    getJwtAuthAddress(overrides?: CallOverrides): Promise<[string]>;

    hashNonceOrder(
      _txs: IModuleCalls.TransactionStruct[],
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      _jwtProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    invoke(
      _txs: IModuleCalls.TransactionStruct[],
      _nonce: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isVaildJwt(
      _hash: PromiseOrValue<BytesLike>,
      _jwt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isValidSigner(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    querySigner(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    readHook(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    readNonce(
      _space: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeHook(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateImplementation(
      _implementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateJwtAuthAddress(
      _newIdentity: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  FACTORY(overrides?: CallOverrides): Promise<string>;

  INIT_CODE_HASH(overrides?: CallOverrides): Promise<string>;

  JWTAUTH_ADDR(overrides?: CallOverrides): Promise<string>;

  SIGVERSION(overrides?: CallOverrides): Promise<number>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  addHook(
    _signature: PromiseOrValue<BytesLike>,
    _implementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addLocalSigner(
    _addr: PromiseOrValue<string>,
    _expiration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delLocalSigner(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fakeInvoke(
    _txs: IModuleCalls.TransactionStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getImplementation(overrides?: CallOverrides): Promise<string>;

  getJwtAuthAddress(overrides?: CallOverrides): Promise<string>;

  hashNonceOrder(
    _txs: IModuleCalls.TransactionStruct[],
    _nonce: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    _jwtProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  invoke(
    _txs: IModuleCalls.TransactionStruct[],
    _nonce: PromiseOrValue<BigNumberish>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isVaildJwt(
    _hash: PromiseOrValue<BytesLike>,
    _jwt: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  isValidSignature(
    _hash: PromiseOrValue<BytesLike>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  isValidSigner(
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  querySigner(
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  readHook(
    _signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  readNonce(
    _space: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeHook(
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceID: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateImplementation(
    _implementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateJwtAuthAddress(
    _newIdentity: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    FACTORY(overrides?: CallOverrides): Promise<string>;

    INIT_CODE_HASH(overrides?: CallOverrides): Promise<string>;

    JWTAUTH_ADDR(overrides?: CallOverrides): Promise<string>;

    SIGVERSION(overrides?: CallOverrides): Promise<number>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    addHook(
      _signature: PromiseOrValue<BytesLike>,
      _implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addLocalSigner(
      _addr: PromiseOrValue<string>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    delLocalSigner(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fakeInvoke(
      _txs: IModuleCalls.TransactionStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    getImplementation(overrides?: CallOverrides): Promise<string>;

    getJwtAuthAddress(overrides?: CallOverrides): Promise<string>;

    hashNonceOrder(
      _txs: IModuleCalls.TransactionStruct[],
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      _jwtProxy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    invoke(
      _txs: IModuleCalls.TransactionStruct[],
      _nonce: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    isVaildJwt(
      _hash: PromiseOrValue<BytesLike>,
      _jwt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    isValidSigner(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    querySigner(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readHook(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    readNonce(
      _space: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeHook(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      _interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateImplementation(
      _implementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateJwtAuthAddress(
      _newIdentity: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EthReceived(address,uint256)"(
      arg0?: null,
      arg1?: null
    ): EthReceivedEventFilter;
    EthReceived(arg0?: null, arg1?: null): EthReceivedEventFilter;

    "ImplementationUpdated(address)"(
      newImplementation?: null
    ): ImplementationUpdatedEventFilter;
    ImplementationUpdated(
      newImplementation?: null
    ): ImplementationUpdatedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "NonceChange(uint256,uint256)"(
      _space?: null,
      _newNonce?: null
    ): NonceChangeEventFilter;
    NonceChange(_space?: null, _newNonce?: null): NonceChangeEventFilter;

    "SignerAdded(address,uint256)"(
      signer?: null,
      expiration?: null
    ): SignerAddedEventFilter;
    SignerAdded(signer?: null, expiration?: null): SignerAddedEventFilter;

    "SignerDeled(address)"(signer?: null): SignerDeledEventFilter;
    SignerDeled(signer?: null): SignerDeledEventFilter;

    "TxExecutedEvent(bytes32,uint256)"(
      _txHash?: null,
      _index?: null
    ): TxExecutedEventEventFilter;
    TxExecutedEvent(_txHash?: null, _index?: null): TxExecutedEventEventFilter;

    "TxFailedEvent(bytes32,uint256,bytes)"(
      _txHash?: null,
      _index?: null,
      _reason?: null
    ): TxFailedEventEventFilter;
    TxFailedEvent(
      _txHash?: null,
      _index?: null,
      _reason?: null
    ): TxFailedEventEventFilter;
  };

  estimateGas: {
    FACTORY(overrides?: CallOverrides): Promise<BigNumber>;

    INIT_CODE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    JWTAUTH_ADDR(overrides?: CallOverrides): Promise<BigNumber>;

    SIGVERSION(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    addHook(
      _signature: PromiseOrValue<BytesLike>,
      _implementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addLocalSigner(
      _addr: PromiseOrValue<string>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delLocalSigner(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fakeInvoke(
      _txs: IModuleCalls.TransactionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    getJwtAuthAddress(overrides?: CallOverrides): Promise<BigNumber>;

    hashNonceOrder(
      _txs: IModuleCalls.TransactionStruct[],
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _jwtProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    invoke(
      _txs: IModuleCalls.TransactionStruct[],
      _nonce: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isVaildJwt(
      _hash: PromiseOrValue<BytesLike>,
      _jwt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidSigner(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    querySigner(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readHook(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readNonce(
      _space: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeHook(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateImplementation(
      _implementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateJwtAuthAddress(
      _newIdentity: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INIT_CODE_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    JWTAUTH_ADDR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SIGVERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addHook(
      _signature: PromiseOrValue<BytesLike>,
      _implementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addLocalSigner(
      _addr: PromiseOrValue<string>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delLocalSigner(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fakeInvoke(
      _txs: IModuleCalls.TransactionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getJwtAuthAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hashNonceOrder(
      _txs: IModuleCalls.TransactionStruct[],
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _jwtProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    invoke(
      _txs: IModuleCalls.TransactionStruct[],
      _nonce: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isVaildJwt(
      _hash: PromiseOrValue<BytesLike>,
      _jwt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidSignature(
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidSigner(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    querySigner(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readHook(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readNonce(
      _space: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeHook(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateImplementation(
      _implementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateJwtAuthAddress(
      _newIdentity: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
