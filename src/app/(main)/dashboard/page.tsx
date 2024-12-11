"use client"

import DashboardHeader from "@/pattern/dashboard/molecules/dashboard-header";
import ScoreBoard from "@/pattern/dashboard/templates/score-board";

export default function Home() {
  return (
    <div className="flex flex-col gap-9">
      <DashboardHeader />
      <ScoreBoard />
    </div>
  );
}
