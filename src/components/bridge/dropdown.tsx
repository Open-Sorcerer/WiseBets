import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  filteredBridgeNetworks: string[];
  selectedNetwork: string | null;
  onSelect: (network: string) => void;
}

export default function Dropdown({
  filteredBridgeNetworks,
  selectedNetwork,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full relative">
      <button
        className="w-full px-6 py-4 truncate font-primary font-semibold text-lg text-violet-500 bg-white/70 flex flex-row justify-between items-center border border-violet-100 rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedNetwork || "Select Network"}
        <FaChevronDown className={`${isOpen && "tran rotate-180"}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full flex flex-col z-10 mt-2 max-h-[13rem] border border-neutral-200 bg-white/90 backdrop-blur-lg w-full rounded-xl shadow-lg scroll-smooth scrollbar">
          {filteredBridgeNetworks.map((network) => (
            <button
              key={network}
              className="flex flex-row gap-3 hover:bg-neutral-100 items-center w-full px-5 py-2 cursor-pointer"
              onClick={() => {
                onSelect(network);
                setIsOpen(false);
              }}
            >
              <p className="text-lg font-primary">{network}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
