
import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell, // Import Cell component from recharts
} from "recharts"; // Import necessary components from recharts
import "./Dashboard.scss"; // Import the Dashboard styles

const Dashboard = () => {
  // Sample breed images URLs
  const breedImages = {
    "Labrador Retriever": "https://via.placeholder.com/150",
    "German Shepherd": "https://via.placeholder.com/150",
    "Golden Retriever": "https://via.placeholder.com/150",
    // Add more image URLs for each breed
  };

  //pie chart data
  const pieChartData = [
    { name: "Pets in Developed Countries", value: 24 },
    { name: "Free-Ranging Dogs", value: 76 },
  ];

  // bar chart data
  const barChartData = [
    { name: "Page A", value: 4000 },
    { name: "Page B", value: 3000 },
    { name: "Page C", value: 2000 },
    { name: "Page D", value: 2780 },
    { name: "Page E", value: 1890 },
    { name: "Page F", value: 2390 },
    { name: "Page G", value: 3490 },
  ];

  return (
    <div className="dashboard__main">
      <div className="sidebar">
        <ul>
          <li>Dog category</li>
          <li>Dogs store</li>
          <li>Dog Doctors</li>
        </ul>
      </div>
      <div className="mainbar">
        <div>
          <h1>this is header part</h1>
          <ul>
            <li>Login</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="description-graphs">
          <div>
            <BarChart width={730} height={250} data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
          <div>2</div>
          <div>3</div>
          <div>
            <PieChart width={400} height={300}>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      [
                        "#FF6633",
                        "#FFB399",
                        "#FF33FF",
                        "#FFFF99",
                        "#00B3E6",
                        "#E6B333",
                        "#3366E6",
                        "#999966",
                        "#99FF99",
                        "#B34D4D",
                        "#80B300",
                        "#809900",
                        "#E6B3B3",
                        "#6680B3",
                        "#66991A",
                        "#FF99E6",
                        "#CCFF1A",
                        "#FF1A66",
                        "#E6331A",
                        "#33FFCC",
                        "#66994D",
                        "#B366CC",
                        "#4D8000",
                        "#B33300",
                        "#CC80CC",
                        "#66664D",
                        "#991AFF",
                        "#E666FF",
                        "#4DB3FF",
                        "#1AB399",
                        "#E666B3",
                        "#33991A",
                        "#CC9999",
                        "#B3B31A",
                        "#00E680",
                        "#4D8066",
                        "#809980",
                        "#E6FF80",
                        "#1AFF33",
                        "#999933",
                        "#FF3380",
                        "#CCCC00",
                        "#66E64D",
                        "#4D80CC",
                        "#9900B3",
                        "#E64D66",
                        "#4DB380",
                        "#FF4D4D",
                        "#99E6E6",
                        "#6666FF",
                      ][index % 50]
                    }
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
