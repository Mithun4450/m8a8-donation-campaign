

import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    
    
    



    const data = [
        { name: "Total Donation", value: 12 },
        { name: "Your Donation", value: 4 }
        
      ];
      
      const COLORS = ["#FF444A", "#00C49F"];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        
      }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      };
    
    return (
        <div className=" w-3/4 md:w-3/4 lg:w-1/2 mx-auto">
            <PieChart className="ml-12" width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className="flex justify-center  gap-6">
                <div className="flex gap-2 items-center"><p>Total Donation</p><div className="bg-[#FF444A] w-12 h-3 rounded-sm"></div></div>
                <div className="flex gap-2 items-center"><p>Your Donation</p><div className="bg-[#00C49F] w-12 h-3 rounded-sm"></div></div>
                
            </div>
        
            
        </div>
    );
};

export default Statistics;