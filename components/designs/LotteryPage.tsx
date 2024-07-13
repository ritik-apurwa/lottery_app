// pages/index.tsx (or wherever your LotteryPage component is)

import React from "react";
import Link from "next/link";
import { LotteryDetail, lotteryDetails } from "@/contants/fake-lottery";

const LooteryDemoCard = ({
  date,
  description,
  lotteryType,
  participants,
  id,
}: LotteryDetail) => {
  // Extract day from the date
  const [day, formattedDate] = date.split("-");
  return (
    <Link href={`/lottery/${id}`}>
      <div className="cursor-pointer">
        <div className="h-fit py-6 rounded-t-lg bg-blue-900 flex items-center justify-center flex-col text-white">
          <p>{day}</p>
          <p>{lotteryType}</p>
        </div>
        <div className="h-fit bg-white flex justify-center py-1 px-2 rounded-b-lg text-black">
          {formattedDate}
        </div>
      </div>
    </Link>
  );
};

const LotteryPage = () => {
  return (
    <div className=" bg-blue-100 min-h-screen  flex justify-center mx-auto">
      <div className="grid grid-cols-2 p-4 w-full h-fit  max-w-7xl md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
        {lotteryDetails.map((lottery, index) => (
          <LooteryDemoCard
            key={index}
            id={lottery.id}
            date={lottery.date}
            description={lottery.description}
            lotteryType={lottery.lotteryType}
            participants={lottery.participants}
            prizeAmount={lottery.prizeAmount}
            winningNumbers={lottery.winningNumbers}
          />
        ))}
      </div>
    </div>
  );
};

export default LotteryPage;
