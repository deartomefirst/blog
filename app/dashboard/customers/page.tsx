import RevenueChart from "@/app/ui/dashboard/revenue-chart";

export default async function Page() {
  return <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
    <RevenueChart />
  </div>;
}