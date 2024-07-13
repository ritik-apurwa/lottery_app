import { LotteryDetail, lotteryDetails } from "@/contants/fake-lottery";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return lotteryDetails.map((lottery) => ({
    lotteryId: String(lottery.id),
  }));
}

async function getLotteryDetail(lotteryId: string): Promise<LotteryDetail | null> {
  return lotteryDetails.find((lottery) => String(lottery.id) === lotteryId) || null;
}

export default async function LotteryDetails({ params }: { params: { lotteryId: string } }) {
  const lotteryDetail = await getLotteryDetail(params.lotteryId);

  if (!lotteryDetail) {
    notFound();
  }

  const [day, formattedDate] = lotteryDetail.date.split("-");

  return (
    <div className=" max-w-7xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-900 text-white p-6">
          <h1 className="text-3xl font-bold">{lotteryDetail.lotteryType}</h1>
          <p className="text-xl">{day} - {formattedDate}</p>
        </div>
        <div className="p-6">
          <p className="text-2xl font-bold mb-4">Prize Amount: ${lotteryDetail.prizeAmount.toLocaleString()}</p>
          <p className="mb-4"><strong>Winning Numbers:</strong> {lotteryDetail.winningNumbers.join(", ")}</p>
          <p className="mb-4"><strong>Description:</strong> {lotteryDetail.description}</p>
          <h2 className="text-xl font-bold mt-6 mb-2">Participants</h2>
          <ul className="list-disc list-inside">
            {lotteryDetail.participants.map((participant, index) => (
              <li key={index}>{participant}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}