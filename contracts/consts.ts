export const bridgeContracts = {
  base: "0x3527a033DC85BEf7b9D2Ec8217d7aB9EedB08592",
  fuji: "0x5EB2E851499Be5Bda359f3316Da43fE4099a1990",
  amoy: "0xA4CCEb9e84b9682ca559AA41DB57f4BECe586dc5",
};

export const opinionTradingContracts = {
  amoy: "0x1a8784a45731F889D4a92258AE7E149d5C737AA1",
  cardona: "0xA4CCEb9e84b9682ca559AA41DB57f4BECe586dc5",
  scroll: "0x039A8561E235cF960bfed66AAD74441E3594aBb4",
  fuji: "0x73aA77fd872208Db90175C3a8BFA2cbba8859732",
  moonbeam: "0xA07637a697ba5c60DEF233508D57B9EDFffBE803",
  zkSync: "0x7757D59d21D9d48382Ca3d755C5609a7a2F3BcBe"
};

export const pathways = {
  amoy: ["fuji", "optimism"],
  fuji: ["amoy", "optimism", "base", "arbitrum"],
  base: ["fuji", "optimism", "arbitrum"],
};

export const chainIds = {
  fuji: "14767482510784806043",
  base: "10344971235874465080",
  optimism: "5224473277236331295",
  amoy: "16281711391670634445",
  arbitrum: "3478487238524512106",
};

export const bridgeABI = [
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "allowlistDestinationChain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "allowlistSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_sourceChainSelector",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "allowlistSourceChain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "messageId",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sourceChainSelector",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "sender",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "destTokenAmounts",
            type: "tuple[]",
          },
        ],
        internalType: "struct Client.Any2EVMMessage",
        name: "message",
        type: "tuple",
      },
    ],
    name: "ccipReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_link",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
    ],
    name: "DestinationChainNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "FailedToWithdrawEth",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidReceiverAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "InvalidRouter",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "calculatedFees",
        type: "uint256",
      },
    ],
    name: "NotEnoughBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NothingToWithdraw",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "SenderNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "sourceChainSelector",
        type: "uint64",
      },
    ],
    name: "SourceChainNotAllowed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "sourceChainSelector",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "MessageReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendMessagePayLINK",
    outputs: [
      {
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "allowlistedDestinationChains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowlistedSenders",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "allowlistedSourceChains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastReceivedMessageDetails",
    outputs: [
      {
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRouter",
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
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export const opinionTradingABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdcToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "option1",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "option2",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "winningOption",
        type: "uint256",
      },
    ],
    name: "ProposalFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUSDC",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
    ],
    name: "RewardWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewardsUSDC",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewardsETH",
        type: "uint256",
      },
    ],
    name: "RewardsDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "option",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUSDC",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
    ],
    name: "VotePlaced",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ethAmount",
        type: "uint256",
      },
    ],
    name: "convertETHToUSDC",
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
        internalType: "uint256",
        name: "_usdcAmount",
        type: "uint256",
      },
    ],
    name: "convertUSDCToETH",
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
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_option1",
        type: "string",
      },
      {
        internalType: "string",
        name: "_option2",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "createProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "distributeRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_winningOption",
        type: "uint256",
      },
    ],
    name: "finalizeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainlinkDataFeedLatestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalContractBalanceInUSDC",
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
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "getTotalPoolETH",
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
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "getTotalPoolUSDC",
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
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserStakeETH",
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
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserStakeUSDC",
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
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserVote",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountUSDC",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountETH",
        type: "uint256",
      },
    ],
    name: "increaseBet",
    outputs: [],
    stateMutability: "payable",
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
    name: "proposalCount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "option1",
        type: "string",
      },
      {
        internalType: "string",
        name: "option2",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "option1Votes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "option2Votes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "option1PoolUSDC",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "option2PoolUSDC",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "option1PoolETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "option2PoolETH",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isFinalized",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "winningOption",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdcToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userStakesETH",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userStakesUSDC",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userVoted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_option",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountUSDC",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountETH",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export const zkSyncOpinionTradingABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_usdcToken",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event",
    "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "option1",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "option2",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "ProposalCreated",
    "type": "event",
    "signature": "0xf00aac70e58cc1fe442334d3dc47da72b9985fa601cfe3ba895c987de3b89d0c"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "winningOption",
        "type": "uint256"
      }
    ],
    "name": "ProposalFinalized",
    "type": "event",
    "signature": "0x7701dba108504636e1c3edeae33d8c8894d878b94ace52c051e49cb5aeb0fe05"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountUSDC",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
      }
    ],
    "name": "RewardWithdrawn",
    "type": "event",
    "signature": "0xa41482a3e45841df1c6d33f45217a1cbe5ce4c6ab246e31f4e5efdef0acfeea2"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalRewardsUSDC",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalRewardsETH",
        "type": "uint256"
      }
    ],
    "name": "RewardsDistributed",
    "type": "event",
    "signature": "0x6ae8ee960d83517f7fa993ad7a0e16e33d9655a23ff41eefc62bdb289c7a8e5f"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "option",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountUSDC",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
      }
    ],
    "name": "VotePlaced",
    "type": "event",
    "signature": "0xca1066690423b15cdb34efd767f1086e71a27578b31c7793ba1a2da29c1e4ee5"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ethAmount",
        "type": "uint256"
      }
    ],
    "name": "convertETHToUSDC",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x831cefa6"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_usdcAmount",
        "type": "uint256"
      }
    ],
    "name": "convertUSDCToETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x7c9c2f8a"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_option1",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_option2",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_deadline",
        "type": "uint256"
      }
    ],
    "name": "createProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x4c15676b"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      }
    ],
    "name": "distributeRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x59974e38"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_winningOption",
        "type": "uint256"
      }
    ],
    "name": "finalizeProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf80339a8"
  },
  {
    "inputs": [],
    "name": "getChainlinkDataFeedLatestAnswer",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0xbea4dfb5"
  },
  {
    "inputs": [],
    "name": "getTotalContractBalanceInUSDC",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x5f7ebc2a"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      }
    ],
    "name": "getTotalPoolETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x37d06481"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      }
    ],
    "name": "getTotalPoolUSDC",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x408080e5"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserStakeETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x06f66d42"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserStakeUSDC",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x5486a569"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserVote",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x03c7881a"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amountUSDC",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amountETH",
        "type": "uint256"
      }
    ],
    "name": "increaseBet",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true,
    "signature": "0x1ecf1287"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x8da5cb5b"
  },
  {
    "inputs": [],
    "name": "proposalCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0xda35c664"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposals",
    "outputs": [
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "option1",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "option2",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "option1Votes",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "option2Votes",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "option1PoolUSDC",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "option2PoolUSDC",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "option1PoolETH",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "option2PoolETH",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isFinalized",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "winningOption",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x013cf08b"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x715018a6"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf2fde38b"
  },
  {
    "inputs": [],
    "name": "usdcToken",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x11eac855"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "userStakesETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0xa62893da"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "userStakesUSDC",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x5ac95e75"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "userVoted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x55b96455"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_option",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amountUSDC",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amountETH",
        "type": "uint256"
      }
    ],
    "name": "vote",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true,
    "signature": "0x68c9e388"
  }
]

export const fujiOpinionTradingABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_option1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_option2",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_deadline",
				"type": "uint256"
			}
		],
		"name": "createProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			}
		],
		"name": "distributeRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_winningOption",
				"type": "uint256"
			}
		],
		"name": "finalizeProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountUSDC",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountETH",
				"type": "uint256"
			}
		],
		"name": "increaseBet",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_usdcToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "option1",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "option2",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "ProposalCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "winningOption",
				"type": "uint256"
			}
		],
		"name": "ProposalFinalized",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountUSDC",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"name": "RewardWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalRewardsUSDC",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalRewardsETH",
				"type": "uint256"
			}
		],
		"name": "RewardsDistributed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_option",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountUSDC",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountETH",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "option",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountUSDC",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"name": "VotePlaced",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ethAmount",
				"type": "uint256"
			}
		],
		"name": "convertETHToUSDC",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_usdcAmount",
				"type": "uint256"
			}
		],
		"name": "convertUSDCToETH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getChainlinkDataFeedLatestAnswer",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalContractBalanceInUSDC",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			}
		],
		"name": "getTotalPoolETH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			}
		],
		"name": "getTotalPoolUSDC",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserStakeETH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserStakeUSDC",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserVote",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proposalCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "option1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "option2",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "option1Votes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "option2Votes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "option1PoolUSDC",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "option2PoolUSDC",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "option1PoolETH",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "option2PoolETH",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isFinalized",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "winningOption",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdcToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userStakesETH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userStakesUSDC",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userVoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];