"use client";

import { NextPage } from "next";
import { Input } from "@/components";
import { SetStateAction, useState } from "react";

const CreateCampaign: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [option1, setOption1] = useState<string>("");
  const [option2, setOption2] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex-1 w-full pt-36 px-5 md:px-40 flex flex-col justify-start items-center">
      <div className="w-full flex flex-col justify-evenly items-center gap-8 relative">
        <div className="relative flex place-items-center before:absolute before:h-[50px] before:w-[180px] sm:before:h-[200px] md:before:w-[780px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[200px] sm:after:h-[180px] sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-lime-200 after:via-lime-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-lime-500 before:dark:opacity-10 after:dark:from-lime-400 after:dark:via-[#01fff7] after:dark:opacity-40 before:lg:h-[260px] z-[-1]">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-title">
            Create Campaigns
          </h1>
        </div>
        <form className="flex flex-col space-y-5 w-[90%] md:max-w-[600px] mx-auto">
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Match IND vs. AUS"
            type="text"
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setName(e.target.value)
            }
            helper="This can be your campaign name"
          />
          <Input
            id="description"
            name="description"
            label="Description"
            placeholder="This is official ICC T20 World Cup."
            type="text"
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setDescription(e.target.value)
            }
            helper="This can be your brief description of campaign"
          />
          <Input
            id="option1"
            name="option1"
            label="Option 1"
            placeholder="Target above 250"
            type="text"
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setOption1(e.target.value)
            }
            helper="This can be your first option"
          />
          <Input
            id="option2"
            name="option2"
            label="Option 2"
            placeholder="Target under 200"
            type="text"
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setOption2(e.target.value)
            }
            helper="This can be your second option"
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
            }}
            className="w-full text-neutral-900 hover:text-neutral-800 bg-gradient-to-tr from-[#f0ffad] to-lime-300 hover:from-lime-200 hover:to-lime-300 rounded-lg px-5 py-2.5 text-center font-medium shadow disabled:opacity-75 disabled:cursor-progress"
            disabled={isLoading}
          >
            {isLoading ? "Getting your campaign ready..." : "Add campaign 🚀"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
