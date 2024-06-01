"use client";

import { IoSwapHorizontal } from "react-icons/io5";
import Dropdown from "./dropdown";
import { SetStateAction, useState } from "react";
import { bridgeNetworks } from "@/utils";

export default function BridgeKit() {
  const [selectedNetwork1, setSelectedNetwork1] = useState<string | null>(null);
  const [selectedNetwork2, setSelectedNetwork2] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>();

  const handleSelectNetwork1 = (network: string) => {
    setSelectedNetwork1(network);
    if (network === selectedNetwork2) setSelectedNetwork2(null);
  };

  const handleSelectNetwork2 = (network: string) => {
    setSelectedNetwork2(network);
    if (network === selectedNetwork1) setSelectedNetwork1(null);
  };

  const handleSwapNetworks = () => {
    setSelectedNetwork1(selectedNetwork2);
    setSelectedNetwork2(selectedNetwork1);
  };

  const filteredNetworks1 = bridgeNetworks.filter((network) => network !== selectedNetwork2);
  const filteredNetworks2 = bridgeNetworks.filter((network) => network !== selectedNetwork1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 py-32 px-5">
      <div className="relative flex place-items-center before:absolute before:h-[50px] before:w-[180px] sm:before:h-[200px] md:before:w-[780px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[200px] sm:after:h-[180px] sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-orange-200 after:via-orange-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-violet-500 before:dark:opacity-10 after:dark:from-violet-400 after:dark:via-[#01fff7] after:dark:opacity-40 before:lg:h-[260px] z-[-1]">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-title">Bridge ETH</h1>
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
          <button onClick={handleSwapNetworks}>
            <IoSwapHorizontal size={25} className="text-neutral-600 rotate-90 md:rotate-0" />
          </button>
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
            placeholder="0.02 ETH"
            type="number"
            value={amount}
            required
          />
          <div className="text-right mt-1 px-2 font-primary text-neutral-400">
            {amount ? amount * 3750 : 0} USD
          </div>
        </div>
        <button className="w-full bg-violet-500 hover:bg-violet-600 text-white text-lg font-primary font-semibold px-8 py-2.5 rounded-xl">
          Bridge {amount! > 0 && `${amount} ETH`}
        </button>
      </div>
    </main>
  );
}
