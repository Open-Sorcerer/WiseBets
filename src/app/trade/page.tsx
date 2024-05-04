import { Trade } from "@/components";
import {
  opnionTradingBaseSepolia,
  opnionTradingBaseSepoliaABI,
} from "@/utils/constants";
import { createPublicClient, getContract, http } from "viem";
import { baseSepolia } from "viem/chains";

const TradePage = async () => {
  const dummyDataList = [
    {
      description: "This is a sample description 1",
      votes: 123,
      option1: "Option 1",
      option2: "Option 2",
      deadline: "2022-12-31",
      address: "123 Main St",
    },
    {
      description: "This is a sample description 2",
      votes: 456,
      option1: "Option A",
      option2: "Option B",
      deadline: "2023-01-01",
      address: "456 Broadway",
    },
    {
      description: "This is a sample description 3",
      votes: 789,
      option1: "Option X",
      option2: "Option Y",
      deadline: "2023-02-01",
      address: "789 Park Ave",
    },
  ];

  const client = createPublicClient({
    chain: baseSepolia,
    transport: http(),
  });

  const contract = getContract({
    address: opnionTradingBaseSepolia,
    abi: opnionTradingBaseSepoliaABI,
    client,
  });

  const totalProposals = (await contract.read.proposalCount([])) as number;

  type TProposal = {
    description: string;
    option1: string;
    option2: string;
    deadline: string;
    id: number;
    votes: number;
  };

  let allProposals: TProposal[] = [];

  function timestampToDateString(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const fetchProposals = async () => {
    for (let i = 1; i <= totalProposals; i++) {
      const proposal = (await contract.read.proposals([i])) as string[];
      const deadline = timestampToDateString(Number(proposal[3]));
      allProposals.push({
        description: proposal[0],
        option1: proposal[1],
        option2: proposal[2],
        deadline,
        id: i,
        votes: Number(proposal[4]) + Number(proposal[5]),
      });
    }
  };

  await fetchProposals();

  console.log(allProposals);

  return (
    <>
      <Trade data={allProposals} />
    </>
  );
};

export default TradePage;
