import React, { SetStateAction, useEffect, useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import Input from "../form/input";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { parseEther } from "viem";
import toast from "react-hot-toast";
import {
  opinionTradingABI,
  opinionTradingContracts,
  zkSyncOpinionTradingABI,
} from "../../../contracts/consts";
import { zkSyncSepoliaTestnet } from "viem/zksync";
import { baseSepolia } from "viem/chains";

interface CardProps {
  description: string;
  votes: number;
  option1: string;
  option2: string;
  deadline: string;
  id: number;
  ethPrice: number;
}

export default function Card({ description, votes, option1, option2, deadline, id, ethPrice }: CardProps) {
  const [bet, setBet] = useState<number>(0);
  const [trade, setTrade] = useState<boolean>(false);
  const [option, setOption] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address, chain } = useAccount();
  const { data, writeContractAsync, status } = useWriteContract();
  const { isSuccess, status: isValid } = useWaitForTransactionReceipt({
    hash: data,
  });

  const placeBet = async () => {
    setIsLoading(true);
    writeContractAsync({
      account: address,
      address: opinionTradingContracts[chain?.id as keyof typeof opinionTradingContracts]
        ?.contract as `0x${string}`,
      abi: chain?.id === zkSyncSepoliaTestnet.id ? zkSyncOpinionTradingABI : opinionTradingABI,
      functionName: "vote",
      args: [id, option === option1 ? 1 : 2, 0, parseEther(bet.toString())],
      value: parseEther(bet.toString()),
    });
  };

  useEffect(() => {
    if (status === "success" && isSuccess && isValid === "success") {
      setIsLoading(false);
      toast.success("Bet Placed Successfully", {
        style: {
          borderRadius: "10px",
        },
      });
    } else if (status === "error") {
      setIsLoading(false);
      toast.error("Something went wrong", {
        style: {
          borderRadius: "10px",
        },
      });
    }
  }, [status, isSuccess, isValid]);

  return (
    <div className="flex flex-col w-[25rem] h-[14rem] bg-white bg-opacity-40 border border-neutral-100 backdrop-filter backdrop-blur-sm rounded-xl shadow-md p-6 justify-between">
      <span className="flex flex-row items-center justify-between">
        <h2 className="w-[80%] text-xl text-neutral-600 font-primary font-medium truncate">
          {description}
        </h2>
        {chain?.id === baseSepolia.id && (
          <button
            onClick={() => {
              !trade
                ? window.open(
                    `https://warpcast.com/~/compose?embeds[]=https://wisebets-frame.vercel.app/bet?id=${id}`,
                    "_blank",
                  )
                : setTrade(false);
            }}
            className="bg-amber-400 justify-center items-center px-2 rounded-lg w-8 h-8 font-bold cursor-pointer"
          >
            {!trade ? (
              <svg
                viewBox="0 0 323 297"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M55.5867 0.733337H263.413V296.267H232.907V160.893H232.607C229.236 123.479 197.792 94.16 159.5 94.16C121.208 94.16 89.7642 123.479 86.3926 160.893H86.0933V296.267H55.5867V0.733337Z"
                  fill="#7c3aed"
                />
                <path
                  d="M0.293335 42.68L12.6867 84.6267H23.1733V254.32C17.9082 254.32 13.64 258.588 13.64 263.853V275.293H11.7333C6.46822 275.293 2.2 279.562 2.2 284.827V296.267H108.973V284.827C108.973 279.562 104.705 275.293 99.44 275.293H97.5333V263.853C97.5333 258.588 93.2651 254.32 88 254.32H76.56V42.68H0.293335Z"
                  fill="#7c3aed"
                />
                <path
                  d="M234.813 254.32C229.548 254.32 225.28 258.588 225.28 263.853V275.293H223.373C218.108 275.293 213.84 279.562 213.84 284.827V296.267H320.613V284.827C320.613 279.562 316.345 275.293 311.08 275.293H309.173V263.853C309.173 258.588 304.905 254.32 299.64 254.32V84.6267H310.127L322.52 42.68H246.253V254.32H234.813Z"
                  fill="#7c3aed"
                />
              </svg>
            ) : (
              "x"
            )}
          </button>
        )}
      </span>
      {!trade ? (
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between items-center px-1">
            <span className="inline-flex items-center gap-2">
              <BsPeopleFill className="text-violet-500" />
              <p className="text-violet-600 text-lg font-primary truncate">{votes}</p>
            </span>
            <span className="inline-flex items-center gap-2">
              <GiSandsOfTime className="text-neutral-400" />
              <p className="text-neutral-500">{deadline}</p>
            </span>
          </div>
          <div className="flex flex-row justify-between items-center gap-2 mt-6">
            <button
              onClick={() => {
                setOption(option1);
                setTrade(true);
              }}
              className="w-[50%] p-2 text-violet-500 text-center bg-white hover:bg-white/80 border border-violet-200 hover:border-violet-400 rounded-lg truncate"
            >
              {option1}
            </button>
            <button
              onClick={() => {
                setOption(option2);
                setTrade(true);
              }}
              className="w-[50%] p-2 text-violet-500 text-center bg-white hover:bg-white/80 border border-violet-200 hover:border-violet-400 rounded-lg truncate"
            >
              {option2}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-4">
          <Input
            id="bet"
            name="bet"
            placeholder="0.005 ETH"
            type="number"
            onChange={(e: { target: { value: SetStateAction<number> } }) => setBet(e.target.value)}
          />
          <button
            onClick={placeBet}
            className="w-full text-neutral-100 bg-violet-500 hover:bg-violet-600 rounded-lg px-5 py-2.5 text-center font-medium shadow disabled:opacity-75 disabled:cursor-progress"
            disabled={isLoading}
          >
            {isLoading ? (
              "Placing order..."
            ) : (
              <p>
                Bet {option} {bet > 0 && `(${(bet * ethPrice).toFixed(2)} USD)`}
              </p>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
