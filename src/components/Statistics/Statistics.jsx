
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell} from "recharts";

const Statistics = () => {
  
  


      const data = [
        { name: "Total Donation", value: 12 },
        { name: "Your Donation", value: 0 }
        
      ];

      const [storedCategoriesLength, setStoredCategoriesLength] = useState(0);

     useEffect(() =>{ 
      const storedCategories = JSON.parse(localStorage.getItem('donations')) || [];
      setStoredCategoriesLength(storedCategories.length)}
     ,[])
      

     

      const yourDonation = storedCategoriesLength;
      data[1].value = yourDonation;

      const remainingTotalDonation = 12 - storedCategoriesLength;
      data[0].value = remainingTotalDonation;

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
        
        <div className="w-4/5 md:w-1/2 lg:w-1/3 mx-auto">
           
              <PieChart width={320} height={320}>
                <Pie
                    data={data}
                    cx={160}
                    cy={150}
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
            <div className="flex justify-center gap-3  md:gap-6">
                <div className="flex gap-2 items-center"><p className="text-sm md:text-base ">Total Donation</p><div className="bg-[#FF444A] w-12 h-3 rounded-sm"></div></div>
                <div className="flex gap-2 items-center"><p className="text-sm md:text-base">Your Donation</p><div className="bg-[#00C49F] w-12 h-3 rounded-sm"></div></div>
                
            </div>

        
        </div>
    );
};

export default Statistics;