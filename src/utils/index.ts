import { networks, bridgeNetworks } from "./constants";
import { aggregatorV3InterfaceABI, dataFeedAddress, zkSyncClient } from "../../contracts/consts";

export { networks, bridgeNetworks };

export const getETHPrice = async () => {  
    const dataFeed = (await zkSyncClient.readContract({
      address: dataFeedAddress,
      abi: aggregatorV3InterfaceABI,
      args: [],
      functionName: "latestRoundData",
    })) as number[];
  
    return Number((Number(dataFeed[1]) / 10 ** 8).toFixed(2));
  };