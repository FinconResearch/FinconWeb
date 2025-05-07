"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useInView } from "../Services/Investment_Services/components/Graphs"

export default function EfficiencyMetricsGraph() {
  const efficiencyData = useMemo(() => [
    {
      name: "Time per Company Profile (hrs)",
      withoutFirm: 800,
      withFirm: 200,
      improvement: "66% faster",
    },
    {
      name: "Avg Time per Model Update (hrs)",
      withoutFirm: 400,
      withFirm: 100,
      improvement: "62.5% faster",
    },
    {
      name: "Analysts Required for Task",
      withoutFirm: 500,
      withFirm: 200,
      improvement: "60% reduction",
    },
    {
      name: "Cost per Research Project",
      withoutFirm: 200,
      withFirm: 850,
      improvement: "$850",
    },
  ], []);

  const [barChartData, setBarChartData] = useState<{ name: string; withoutFirm: number; withFirm: number; improvement: string; }[]>([]);
  const barChartRef = useRef<HTMLDivElement>(null);
  const isBarChartInView = useInView(barChartRef, 0.5);

  useEffect(() => {
    if (isBarChartInView) {
      const timer = setTimeout(() => {
        setBarChartData(efficiencyData);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isBarChartInView, efficiencyData]);

  return (
    <div className="h-[400px]" ref={barChartRef}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barChartData} layout="vertical" margin={{ top: 20, right: 50, left: 70, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" domain={[0, "dataMax"]} />
          <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value, name) => {
              return [value, name === "withoutFirm" ? "Without Your Firm" : "With Your Firm"];
            }}
            labelFormatter={(label) => label}
          />
          <Bar
            dataKey="withoutFirm"
            name="Without Your Firm"
            fill="#e5e5e5"
            radius={[0, 4, 4, 0]}
            animationDuration={1500}
            animationBegin={300}
          />
          <Bar
            dataKey="withFirm"
            name="With Your Firm"
            fill="#3b82f6"
            radius={[0, 4, 4, 0]}
            animationDuration={1500}
            animationBegin={600}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
