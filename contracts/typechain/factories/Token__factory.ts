/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280601081526020017f4d79204861726468617420546f6b656e000000000000000000000000000000008152506000908051906020019062000051929190620001a0565b506040518060400160405280600381526020017f4d48540000000000000000000000000000000000000000000000000000000000815250600190805190602001906200009f929190620001a0565b50348015620000ad57600080fd5b50600254600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200014e620186a06200015a60201b6200046c1760201c565b60028190555062000412565b600081424533604051602001620001749392919062000286565b6040516020818303038152906040528051906020012060001c6200019991906200036f565b9050919050565b828054620001ae9062000307565b90600052602060002090601f016020900481019282620001d257600085556200021e565b82601f10620001ed57805160ff19168380011785556200021e565b828001600101855582156200021e579182015b828111156200021d57825182559160200191906001019062000200565b5b5090506200022d919062000231565b5090565b5b808211156200024c57600081600090555060010162000232565b5090565b620002656200025f82620002c9565b6200033d565b82525050565b620002806200027a82620002fd565b62000365565b82525050565b60006200029482866200026b565b602082019150620002a682856200026b565b602082019150620002b8828462000250565b601482019150819050949350505050565b6000620002d682620002dd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060028204905060018216806200032057607f821691505b60208210811415620003375762000336620003d6565b5b50919050565b60006200034a8262000351565b9050919050565b60006200035e8262000405565b9050919050565b6000819050919050565b60006200037c82620002fd565b91506200038983620002fd565b9250826200039c576200039b620003a7565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160601b9050919050565b610a6d80620004226000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd1461008557806370a08231146100a35780638da5cb5b146100d357806395d89b41146100f1578063a9059cbb1461010f575b600080fd5b61006f61012b565b60405161007c9190610702565b60405180910390f35b61008d6101b9565b60405161009a9190610774565b60405180910390f35b6100bd60048036038101906100b8919061059d565b6101bf565b6040516100ca9190610774565b60405180910390f35b6100db610208565b6040516100e891906106e7565b60405180910390f35b6100f961022e565b6040516101069190610702565b60405180910390f35b610129600480360381019061012491906105c6565b6102bc565b005b60008054610138906108a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610164906108a4565b80156101b15780601f10610186576101008083540402835291602001916101b1565b820191906000526020600020905b81548152906001019060200180831161019457829003601f168201915b505050505081565b60025481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001805461023b906108a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610267906108a4565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b505050505081565b61033a6040518060400160405280601b81526020017f53656e6465722062616c616e636520697320257320746f6b656e730000000000815250600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104ae565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156103bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b390610754565b60405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461040b9190610801565b9250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461046191906107ab565b925050819055505050565b600081424533604051602001610484939291906106aa565b6040516020818303038152906040528051906020012060001c6104a79190610904565b9050919050565b61054682826040516024016104c4929190610724565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061054a565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60008135905061058281610a09565b92915050565b60008135905061059781610a20565b92915050565b6000602082840312156105af57600080fd5b60006105bd84828501610573565b91505092915050565b600080604083850312156105d957600080fd5b60006105e785828601610573565b92505060206105f885828601610588565b9150509250929050565b61060b81610835565b82525050565b61062261061d82610835565b6108d6565b82525050565b60006106338261078f565b61063d818561079a565b935061064d818560208601610871565b610656816109c2565b840191505092915050565b600061066e60118361079a565b9150610679826109e0565b602082019050919050565b61068d81610867565b82525050565b6106a461069f82610867565b6108fa565b82525050565b60006106b68286610693565b6020820191506106c68285610693565b6020820191506106d68284610611565b601482019150819050949350505050565b60006020820190506106fc6000830184610602565b92915050565b6000602082019050818103600083015261071c8184610628565b905092915050565b6000604082019050818103600083015261073e8185610628565b905061074d6020830184610684565b9392505050565b6000602082019050818103600083015261076d81610661565b9050919050565b60006020820190506107896000830184610684565b92915050565b600081519050919050565b600082825260208201905092915050565b60006107b682610867565b91506107c183610867565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156107f6576107f5610935565b5b828201905092915050565b600061080c82610867565b915061081783610867565b92508282101561082a57610829610935565b5b828203905092915050565b600061084082610847565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561088f578082015181840152602081019050610874565b8381111561089e576000848401525b50505050565b600060028204905060018216806108bc57607f821691505b602082108114156108d0576108cf610993565b5b50919050565b60006108e1826108e8565b9050919050565b60006108f3826109d3565b9050919050565b6000819050919050565b600061090f82610867565b915061091a83610867565b92508261092a57610929610964565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b610a1281610835565b8114610a1d57600080fd5b50565b610a2981610867565b8114610a3457600080fd5b5056fea2646970667358221220cd8fe64a0a154521b8fe24a650c5131e51c7a68f75e2c1444f1df9eb024da68364736f6c63430008040033";

export class Token__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
