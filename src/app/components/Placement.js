"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveBar } from "@nivo/bar";
import "./Placement.css";

export default function Placement() {
  return (<div className="Placementdiv">
     <div className="bg-white p-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Our Placements Stats</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center">Department-wise BTech Offers</h2>
          <BarChart className="w-full h-[300px]" />
          <div className="grid grid-cols-5 gap-4">
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">486</p>
                <p className="text-sm nums">CSE</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">558</p>
                <p className="text-sm nums">ECE</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">626</p>
                <p className="text-sm nums">EE</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">860</p>
                <p className="text-sm nums">ME</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">876</p>
                <p className="text-sm nums">Others</p>
              </CardContent>
            </Card>
          </div>
          <Button className="w-full bg-[#E0F2FE] border-solid border-2 border-sky-500">View Branch-Wise Stats</Button>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center">BTech Highest Package in LPA</h2>
          <BarChart className="w-full h-[300px]" />
          <div className="grid grid-cols-5 gap-4">
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">844</p>
                <p className="text-sm nums">CSE</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">876</p>
                <p className="text-sm nums">ECE</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">860</p>
                <p className="text-sm nums">EE</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">626</p>
                <p className="text-sm nums">ME</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E0F2FE]">
              <CardContent className="text-center">
                <p className="text-3xl font-bold nums">558</p>
                <p className="text-sm nums">Others</p>
              </CardContent>
            </Card>
          </div>
          <Button className="w-full bg-[#000000] border-double border-4 border-sky-500 ">Download Report</Button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-[#E0F2FE] flex flex-col items-center p-4 space-y-4">
          <BriefcaseIcon className="text-[#172554] h-8 w-8" />
          <h3 className="text-lg font-semibold">Top Recruiters</h3>
          <p>Google, Amazon, Microsoft</p>
        </Card>
        <Card className="bg-[#E0F2FE] flex flex-col items-center p-4 space-y-4">
          <h3 className="text-lg font-semibold">Average Package</h3>
          <p className="text-3xl font-bold">Rs. 13.5 Lakh</p>
        </Card>
        <Card className="bg-[#E0F2FE] flex flex-col items-center p-4 space-y-4">
          <h3 className="text-lg font-semibold">Placement Rate</h3>
          <p className="text-3xl font-bold">94%</p>
        </Card>
        <Card className="bg-[#E0F2FE] flex flex-col items-center p-4 space-y-4">
          <GlobeIcon className="text-[#172554] h-8 w-8" />
          <h3 className="text-lg font-semibold">International Offers</h3>
          <p>15+ offers</p>
        </Card>
        <Card className="bg-[#E0F2FE] flex flex-col items-center p-4 space-y-4">
          <GlobeIcon className="text-[#172554] h-8 w-8" />
          <h3 className="text-lg font-semibold">International Offers</h3>
          <p>15+ offers</p>
        </Card>
      </div>
    </div>
  </div>
   
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "CSE", count: 111 },
          { name: "ECE", count: 157 },
          { name: "EE", count: 129 },
          { name: "ME", count: 150 },
          { name: "Others", count: 119 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
