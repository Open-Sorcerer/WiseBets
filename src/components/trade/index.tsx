"use client";

import Card from "./card";

interface TOpinion {
  description: string;
  votes: number;
  option1: string;
  option2: string;
  deadline: string;
  id: number;
}

interface TradeProps {
  data: TOpinion[];
}

const Trade = ({ data }: TradeProps) => {
  return (
    <div className="flex flex-col w-full py-32 px-5 md:px-32 lg:px-28 xl:px-44 2xl:px-20">
      <h1 className="text-2xl md:text-3xl font-title font-medium">Trade on Live Opinions ⚡️</h1>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
        {data.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Trade;
