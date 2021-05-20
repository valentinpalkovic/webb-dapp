/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MerkleTreeWithHistoryInterface extends ethers.utils.Interface {
  functions: {
    "FIELD_SIZE()": FunctionFragment;
    "ROOT_HISTORY_SIZE()": FunctionFragment;
    "ZERO_VALUE()": FunctionFragment;
    "currentRootIndex()": FunctionFragment;
    "filledSubtrees(uint256)": FunctionFragment;
    "hasher()": FunctionFragment;
    "levels()": FunctionFragment;
    "nextIndex()": FunctionFragment;
    "roots(uint256)": FunctionFragment;
    "hashLeftRight(address,bytes32,bytes32)": FunctionFragment;
    "isKnownRoot(bytes32)": FunctionFragment;
    "getLastRoot()": FunctionFragment;
    "zeros(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentRootIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(functionFragment: "roots", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentRootIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;

  events: {};
}

export class MerkleTreeWithHistory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MerkleTreeWithHistoryInterface;

  functions: {
    FIELD_SIZE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "FIELD_SIZE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    ROOT_HISTORY_SIZE(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "ROOT_HISTORY_SIZE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    ZERO_VALUE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "ZERO_VALUE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    currentRootIndex(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "currentRootIndex()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "filledSubtrees(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    hasher(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "hasher()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    levels(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "levels()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    nextIndex(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "nextIndex()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    roots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "roots(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Hash 2 tree leaves, returns MiMC(_left, _right)
     */
    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Hash 2 tree leaves, returns MiMC(_left, _right)
     */
    "hashLeftRight(address,bytes32,bytes32)"(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Whether the root is present in the root history
     */
    isKnownRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Whether the root is present in the root history
     */
    "isKnownRoot(bytes32)"(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Returns the last root
     */
    getLastRoot(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the last root
     */
    "getLastRoot()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
     */
    zeros(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
     */
    "zeros(uint256)"(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  "FIELD_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

  ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

  "ROOT_HISTORY_SIZE()"(overrides?: CallOverrides): Promise<number>;

  ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

  "ZERO_VALUE()"(overrides?: CallOverrides): Promise<BigNumber>;

  currentRootIndex(overrides?: CallOverrides): Promise<number>;

  "currentRootIndex()"(overrides?: CallOverrides): Promise<number>;

  filledSubtrees(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "filledSubtrees(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  hasher(overrides?: CallOverrides): Promise<string>;

  "hasher()"(overrides?: CallOverrides): Promise<string>;

  levels(overrides?: CallOverrides): Promise<number>;

  "levels()"(overrides?: CallOverrides): Promise<number>;

  nextIndex(overrides?: CallOverrides): Promise<number>;

  "nextIndex()"(overrides?: CallOverrides): Promise<number>;

  roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "roots(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Hash 2 tree leaves, returns MiMC(_left, _right)
   */
  hashLeftRight(
    _hasher: string,
    _left: BytesLike,
    _right: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Hash 2 tree leaves, returns MiMC(_left, _right)
   */
  "hashLeftRight(address,bytes32,bytes32)"(
    _hasher: string,
    _left: BytesLike,
    _right: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Whether the root is present in the root history
   */
  isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  /**
   * Whether the root is present in the root history
   */
  "isKnownRoot(bytes32)"(
    _root: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Returns the last root
   */
  getLastRoot(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the last root
   */
  "getLastRoot()"(overrides?: CallOverrides): Promise<string>;

  /**
   * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
   */
  zeros(i: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
   */
  "zeros(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "FIELD_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

    "ROOT_HISTORY_SIZE()"(overrides?: CallOverrides): Promise<number>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    "ZERO_VALUE()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<number>;

    "currentRootIndex()"(overrides?: CallOverrides): Promise<number>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "filledSubtrees(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    hasher(overrides?: CallOverrides): Promise<string>;

    "hasher()"(overrides?: CallOverrides): Promise<string>;

    levels(overrides?: CallOverrides): Promise<number>;

    "levels()"(overrides?: CallOverrides): Promise<number>;

    nextIndex(overrides?: CallOverrides): Promise<number>;

    "nextIndex()"(overrides?: CallOverrides): Promise<number>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "roots(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Hash 2 tree leaves, returns MiMC(_left, _right)
     */
    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Hash 2 tree leaves, returns MiMC(_left, _right)
     */
    "hashLeftRight(address,bytes32,bytes32)"(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Whether the root is present in the root history
     */
    isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    /**
     * Whether the root is present in the root history
     */
    "isKnownRoot(bytes32)"(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns the last root
     */
    getLastRoot(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the last root
     */
    "getLastRoot()"(overrides?: CallOverrides): Promise<string>;

    /**
     * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
     */
    zeros(i: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
     */
    "zeros(uint256)"(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "FIELD_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "ROOT_HISTORY_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    "ZERO_VALUE()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "currentRootIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "filledSubtrees(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasher(overrides?: CallOverrides): Promise<BigNumber>;

    "hasher()"(overrides?: CallOverrides): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<BigNumber>;

    "levels()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "nextIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "roots(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Hash 2 tree leaves, returns MiMC(_left, _right)
     */
    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Hash 2 tree leaves, returns MiMC(_left, _right)
     */
    "hashLeftRight(address,bytes32,bytes32)"(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Whether the root is present in the root history
     */
    isKnownRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Whether the root is present in the root history
     */
    "isKnownRoot(bytes32)"(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the last root
     */
    getLastRoot(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the last root
     */
    "getLastRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
     */
    zeros(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
     */
    "zeros(uint256)"(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "FIELD_SIZE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ROOT_HISTORY_SIZE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ZERO_VALUE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentRootIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentRootIndex()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "filledSubtrees(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "hasher()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    levels(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "levels()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextIndex()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "roots(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Hash 2 tree leaves, returns MiMC(_left, _right)
     */
    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Hash 2 tree leaves, returns MiMC(_left, _right)
     */
    "hashLeftRight(address,bytes32,bytes32)"(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Whether the root is present in the root history
     */
    isKnownRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Whether the root is present in the root history
     */
    "isKnownRoot(bytes32)"(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the last root
     */
    getLastRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the last root
     */
    "getLastRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
     */
    zeros(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * provides Zero (Empty) elements for a MiMC MerkleTree. Up to 32 levels
     */
    "zeros(uint256)"(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}