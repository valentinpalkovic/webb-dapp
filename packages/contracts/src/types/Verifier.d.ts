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

interface VerifierInterface extends ethers.utils.Interface {
  functions: {
    "verifyProof(bytes,uint256[6])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [BytesLike, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {};
}

export class Verifier extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VerifierInterface;

  functions: {
    "verifyProof(bytes,uint256[6])"(
      proof: BytesLike,
      inputs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      r: boolean;
      0: boolean;
    }>;

    "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[6])"(
      a: BigNumberish[],
      b: BigNumberish[][],
      c: BigNumberish[],
      input: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      r: boolean;
      0: boolean;
    }>;
  };

  "verifyProof(bytes,uint256[6])"(
    proof: BytesLike,
    inputs: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[6])"(
    a: BigNumberish[],
    b: BigNumberish[][],
    c: BigNumberish[],
    input: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    "verifyProof(bytes,uint256[6])"(
      proof: BytesLike,
      inputs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[6])"(
      a: BigNumberish[],
      b: BigNumberish[][],
      c: BigNumberish[],
      input: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    "verifyProof(bytes,uint256[6])"(
      proof: BytesLike,
      inputs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[6])"(
      a: BigNumberish[],
      b: BigNumberish[][],
      c: BigNumberish[],
      input: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "verifyProof(bytes,uint256[6])"(
      proof: BytesLike,
      inputs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[6])"(
      a: BigNumberish[],
      b: BigNumberish[][],
      c: BigNumberish[],
      input: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}