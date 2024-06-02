"use client";

import { IoSwapHorizontal } from "react-icons/io5";
import Dropdown from "./dropdown";
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { useAccount, useSwitchChain, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { avalancheFuji, baseSepolia, polygonAmoy } from "viem/chains";
import {
  USDCABI,
  bridgeABI,
  bridgeContracts,
  chainIds,
  usdcAddress,
} from "../../../contracts/consts";
import { parseUnits } from "viem";
import Spinner from "../shared/Spinner";
import toast from "react-hot-toast";
import Link from "next/link";
import FarcasterIcon from "@/icons/farcaster";

export default function BridgeKit() {
  const [selectedNetwork1, setSelectedNetwork1] = useState<string | null>(null);
  const [selectedNetwork2, setSelectedNetwork2] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [loading, setLoading] = useState<"approve" | "bridge" | "none">("none");
  const [amount, setAmount] = useState<number>();
  const { address } = useAccount();
  const { switchChain } = useSwitchChain();

  useEffect(() => {
    if (selectedNetwork1 === "Base Sepolia") switchChain({ chainId: baseSepolia.id });
    else if (selectedNetwork1 === "Avalanche Fuji") switchChain({ chainId: avalancheFuji.id });
    else switchChain({ chainId: polygonAmoy.id });
  }, [selectedNetwork1]);

  const handleSelectNetwork1 = (network: string) => {
    setSelectedNetwork1(network);
    if (network === selectedNetwork2) setSelectedNetwork2(null);
  };

  const handleSelectNetwork2 = (network: string) => {
    setSelectedNetwork2(network);
    if (network === selectedNetwork1) setSelectedNetwork1(null);
  };

  const filteredNetworks1 = ["Base Sepolia", "Avalanche Fuji", "Polygon Amoy"];
  const filteredNetworks2 = ["Optimism Sepolia"];

  if (selectedNetwork1 === "Base Sepolia") {
    filteredNetworks2.push("Avalanche Fuji", "Arbitrum Sepolia");
  } else if (selectedNetwork1 === "Avalanche Fuji") {
    filteredNetworks2.push("Polygon Amoy", "Base Sepolia", "Arbitrum Sepolia");
  } else if (selectedNetwork1 === "Polygon Amoy") {
    filteredNetworks2.push("Avalanche Fuji");
  }

  const { writeContractAsync: usdcContractWrite, data: usdcHash } = useWriteContract();

  const { isSuccess, isLoading: usdcLoading } = useWaitForTransactionReceipt({ hash: usdcHash });

  const { writeContractAsync: bridgeContractWrite, data: bridgeHash } = useWriteContract();

  const { isSuccess: isBridgeSuccess, isLoading: bridgeLoading } = useWaitForTransactionReceipt({
    hash: bridgeHash,
  });

  const approveUSDC = async () => {
    if (selectedNetwork1 && selectedNetwork2 && amount) {
      try {
        setLoading("approve");
        await usdcContractWrite({
          address: usdcAddress[selectedNetwork1 as keyof typeof usdcAddress] as `0x${string}`,
          abi: USDCABI,
          functionName: "approve",
          args: [
            bridgeContracts[
              selectedNetwork1 === "Base Sepolia"
                ? baseSepolia.id
                : selectedNetwork1 === "Avalanche Fuji"
                  ? avalancheFuji.id
                  : polygonAmoy.id
            ] as `0x${string}`,
            parseUnits(amount.toString(), 6),
          ],
        });
      } catch (e) {
        console.error(e);
        setLoading("none");
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      bridgeUSDC();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isBridgeSuccess) {
      setLoading("none");
      toast.success("USDC bridged successfully");
    }
  }, [isBridgeSuccess]);

  const bridgeUSDC = async () => {
    if (selectedNetwork1 && selectedNetwork2 && amount) {
      try {
        setLoading("bridge");
        await bridgeContractWrite({
          address: bridgeContracts[
            selectedNetwork1 === "Base Sepolia"
              ? baseSepolia.id
              : selectedNetwork1 === "Avalanche Fuji"
                ? avalancheFuji.id
                : polygonAmoy.id
          ] as `0x${string}`,
          abi: bridgeABI,
          functionName: "sendMessagePayLINK",
          args: [
            chainIds[selectedNetwork2 as keyof typeof chainIds],
            address,
            "Sending USDC",
            usdcAddress[selectedNetwork1 as keyof typeof usdcAddress],
            parseUnits(amount.toString(), 6),
          ],
        });
      } catch (e) {
        console.error(e);
        setLoading("none");
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-start gap-3 pt-32 pb-10 md:pb-0 px-5">
      <div className="relative flex place-items-center before:absolute before:h-[50px] before:w-[180px] sm:before:h-[200px] md:before:w-[780px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[200px] sm:after:h-[180px] sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-orange-200 after:via-orange-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-violet-500 before:dark:opacity-10 after:dark:from-violet-400 after:dark:via-[#01fff7] after:dark:opacity-40 before:lg:h-[260px] z-[-1]">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-title mb-6">Bridge USDC</h1>
      </div>
      <div className="bg-[#ffffff]/20 w-full sm:w-3/4 md:w-2/3 lg:h-2/3 xl:w-1/2 flex flex-col p-5 gap-5 items-center border-2 border-orange-100 rounded-2xl">
        <div className="w-full flex flex-col md:flex-row gap-y-4 items-center justify-between">
          <div className="min-w-full md:min-w-[12rem] lg:min-w-[17rem] xl:min-w-[16rem] 2xl:min-w-[20rem]">
            <Dropdown
              filteredBridgeNetworks={filteredNetworks1}
              selectedNetwork={selectedNetwork1}
              onSelect={handleSelectNetwork1}
            />
          </div>
          <IoSwapHorizontal size={25} className="text-neutral-600 rotate-90 md:rotate-0" />
          <div className="min-w-full md:min-w-[12rem] lg:min-w-[17rem] xl:min-w-[16rem] 2xl:min-w-[20rem]">
            <Dropdown
              filteredBridgeNetworks={filteredNetworks2}
              selectedNetwork={selectedNetwork2}
              onSelect={handleSelectNetwork2}
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-neutral-600 text-sm md:text-[1.2rem]" style={{ marginRight: 0 }}>
            Enter Amount
          </label>
          <input
            id="amount"
            name="bridgeAmount"
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setAmount(Number(e.target.value))
            }
            className="mt-2 bg-[#141414]/5 font-primary border border-neutral-500 text-neutral-700 placeholder:text-neutral-500 rounded-xl focus:border-neutral-300 focus:ring-neutral-300 active:border-neutral-400 active:ring-neutral-400 block w-full p-3.5"
            placeholder="69 USDC"
            type="number"
            value={amount}
            required
          />
        </div>
        <button
          onClick={approveUSDC}
          disabled={loading !== "none"}
          className={`w-full items-center justify-center flex gap-2 bg-violet-500 hover:bg-violet-600 text-white text-lg font-primary font-semibold px-8 py-2.5 rounded-xl ${loading !== "none" && "bg-violet-400"}`}
        >
          {loading === "approve" ? "Approving" : loading === "bridge" ? "Bridging" : "Bridge"}{" "}
          {amount! > 0 && `${amount} USDC`}
          {loading !== "none" && <Spinner className="text-white" />}
        </button>
      </div>
      <div className="inline-flex items-center justify-center w-full sm:w-3/4 md:w-2/3 lg:h-2/3 xl:w-1/2">
        <hr className="w-full h-px my-8 bg-gradient-to-r from-transparent to-transparent via-neutral-400 border-0" />
        <span className="absolute px-3 font-medium -translate-x-1/2 left-1/2 text-neutral-800">
          OR
        </span>
      </div>
      <Link
        id="frame"
        href="https://warpcast.com/neelpatel/0x503a9fbc"
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-row items-center justify-center gap-4 border border-violet-500 hover:bg-violet-500 text-lg text-neutral-800 hover:text-white font-medium hover:shadow-lg py-3 px-10 rounded-xl w-full sm:w-3/4 md:w-2/3 lg:h-2/3 xl:w-[46%]"
      >
        <FarcasterIcon color={!isHovered ? "black" : "white"} /> Buy it from Frame
      </Link>
      <span className="flex flex-row items-center mt-2 gap-3">
        powered by <Image alt="Chainlink" src="/chainlink.png" width={100} height={100} />{" "}
      </span>
    </main>
  );
}
