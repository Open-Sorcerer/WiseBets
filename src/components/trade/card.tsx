"use client";
import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";

interface Card {
  description: string;
  votes: number;
  option1: string;
  option2: string;
  deadline: string;
  id: number;
}

const Card = ({ description, votes, option1, option2, deadline, id }: Card) => {
  return (
    <div className='flex flex-col w-[25rem] h-[9.5rem] bg-[#141414] bg-opacity-70 border border-neutral-800 backdrop-filter backdrop-blur-sm rounded-xl shadow-md p-5'>
      <span className='flex flex-row items-center justify-between'>
        <h2 className='w-[80%] text-xl text-neutral-200 font-primary font-medium truncate'>
          {description}
        </h2>
        <button
          onClick={() =>
            window.open(
              `https://warpcast.com/~/compose?embeds[]=https://opinion-swap.vercel.app/bet?id=${id}`,
              "_blank"
            )
          }
          className='bg-amber-400 items-center rounded-lg w-fit px-2 py-1.5 cursor-pointer'
        >
          <svg
            viewBox='0 0 323 297'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4'
          >
            <path
              d='M55.5867 0.733337H263.413V296.267H232.907V160.893H232.607C229.236 123.479 197.792 94.16 159.5 94.16C121.208 94.16 89.7642 123.479 86.3926 160.893H86.0933V296.267H55.5867V0.733337Z'
              fill='#7c3aed'
            />
            <path
              d='M0.293335 42.68L12.6867 84.6267H23.1733V254.32C17.9082 254.32 13.64 258.588 13.64 263.853V275.293H11.7333C6.46822 275.293 2.2 279.562 2.2 284.827V296.267H108.973V284.827C108.973 279.562 104.705 275.293 99.44 275.293H97.5333V263.853C97.5333 258.588 93.2651 254.32 88 254.32H76.56V42.68H0.293335Z'
              fill='#7c3aed'
            />
            <path
              d='M234.813 254.32C229.548 254.32 225.28 258.588 225.28 263.853V275.293H223.373C218.108 275.293 213.84 279.562 213.84 284.827V296.267H320.613V284.827C320.613 279.562 316.345 275.293 311.08 275.293H309.173V263.853C309.173 258.588 304.905 254.32 299.64 254.32V84.6267H310.127L322.52 42.68H246.253V254.32H234.813Z'
              fill='#7c3aed'
            />
          </svg>
        </button>
      </span>
      <div className='flex flex-row justify-between items-center mt-2 px-1'>
        <span className='inline-flex items-center gap-2'>
          <FaMoneyBillWave className='text-lime-200' />
          <p className='text-lime-300 text-lg font-primary truncate'>{votes}</p>
        </span>
        <span className='inline-flex items-center gap-2'>
          <GiSandsOfTime className='text-neutral-300' />
          <p className='text-neutral-400'>{deadline}</p>
        </span>
      </div>
      <div className='flex flex-row justify-between items-center gap-2 mt-3'>
        <button className='w-[50%] p-2 text-lime-100 text-center bg-neutral-200/10 hover:bg-neutral-400/10 hover:border hover:border-lime-200/50 rounded-lg truncate'>
          {option1}
        </button>
        <button className='w-[50%] p-2 text-lime-100 text-center bg-neutral-200/10 hover:bg-neutral-400/10 hover:border hover:border-lime-200/50 rounded-lg truncate'>
          {option2}
        </button>
      </div>
    </div>
  );
};

export default Card;
