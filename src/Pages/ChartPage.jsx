import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar
} from "recharts";
import NavBar from "../Components/Navbar/Navbar";
const arr = [
  { month: "Feb", sales: 15000 },
  { month: "March", sales: 8000 },
  { month: "April", sales: 4500 },
  { month: "May", sales: 11000 },
  { month: "June", sales: 2000 },
  { month: "July", sales: 9500 },
];
const arr2 = [
  { Quater: "Q1", sales: 15000 },
  { Quater: "Q2", sales: 8000 },
  { Quater: "Q3", sales: 4500 },
  { Quater: "Q4", sales: 11000 }
]

const ChartPage = () => {
  return (
    <div>
      <NavBar/>
      <div className="heading">
        <h1>Line Chart for Monthly Sales</h1>
      </div>
      <div>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={arr}
            width={400}
            height={250}
            margin={{ top: 1, right: 100, bottom: 1, left: 100 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="sales" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="heading">
        <h1>Bar Chart for Quarterly Sales</h1>
      </div>
      <div>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart width={400} height={250} data={arr2} margin={{ top: 1, right: 100, bottom: 1, left: 100 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Quater" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartPage;
