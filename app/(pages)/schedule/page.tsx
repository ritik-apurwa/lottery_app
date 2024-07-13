import { bumberLooteries, weeklyLotteries } from "@/contants";
import React from "react";

const LooterSchedule = () => {
  return (
    <section className=" mx-auto min-h-screen  bg-blue-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Looter Schedule
          </h1>
          <p className="text-gray-600">Our lottery system</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Weekly Lotteries */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <h2 className="bg-blue-900 text-white py-3 px-6 text-xl font-bold">
                Weekly Lotteries
              </h2>
              <div className="divide-y divide-gray-200">
                {weeklyLotteries.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 items-center px-6 py-4"
                  >
                    <p className="text-gray-700 text-left">{item.day}</p>
                    <p className="text-gray-700 text-right font-medium">
                      {item.lotteryType}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bumper Lotteries */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <h2 className="bg-blue-900 text-white py-3 px-6 text-xl font-bold">
                Bumper Lotteries
              </h2>
              <div className="divide-y divide-gray-200">
                {bumberLooteries.map((item, index) => (
                  <div key={index} className="px-6 py-4">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LooterSchedule;
