// data/lotteryDetails.ts

export interface LotteryDetail {
    id: number;
    date: string;
    participants: string[];
    prizeAmount: string;
    winningNumbers: number[];
    description: string;
    lotteryType: "LotteryType1" | "LotteryType2" | "LotteryType3" | "LotteryType4" | "LotteryType5" | "LotteryType6";
  }
  
  export const lotteryDetails: LotteryDetail[] = [
    {
      id: 1,
      date: "Monday-01/06/2024",
      participants: ["Alice", "Bob", "Charlie"],
      prizeAmount: "$1000",
      winningNumbers: [12, 23, 34, 45, 56],
      description: "A special lottery for the first Monday of June.",
      lotteryType: "LotteryType1",
    },
    {
      id: 2,
      date: "Tuesday-02/06/2024",
      participants: ["Dave", "Eve", "Frank"],
      prizeAmount: "$1200",
      winningNumbers: [15, 25, 35, 45, 55],
      description: "A regular Tuesday lottery with a high prize amount.",
      lotteryType: "LotteryType2",
    },
    {
      id: 3,
      date: "Wednesday-03/06/2024",
      participants: ["Gina", "Hank", "Ivy"],
      prizeAmount: "$1100",
      winningNumbers: [11, 22, 33, 44, 55],
      description: "Mid-week excitement with great prizes.",
      lotteryType: "LotteryType3",
    },
    {
      id: 4,
      date: "Thursday-04/06/2024",
      participants: ["Jack", "Kate", "Leo"],
      prizeAmount: "$900",
      winningNumbers: [14, 24, 34, 44, 54],
      description: "Thursday thrill with a big jackpot.",
      lotteryType: "LotteryType4",
    },
    {
      id: 5,
      date: "Friday-05/06/2024",
      participants: ["Mona", "Nick", "Oscar"],
      prizeAmount: "$1500",
      winningNumbers: [13, 23, 33, 43, 53],
      description: "End the week with a massive prize!",
      lotteryType: "LotteryType5",
    },
    {
      id: 6,
      date: "Saturday-06/06/2024",
      participants: ["Paul", "Quincy", "Rita"],
      prizeAmount: "$1300",
      winningNumbers: [10, 20, 30, 40, 50],
      description: "Weekend excitement with high stakes.",
      lotteryType: "LotteryType6",
    },
    {
      id: 7,
      date: "Sunday-07/06/2024",
      participants: ["Sam", "Tina", "Uma"],
      prizeAmount: "$1400",
      winningNumbers: [17, 27, 37, 47, 57],
      description: "Sunday special with incredible prizes.",
      lotteryType: "LotteryType1",
    },
  ];
  