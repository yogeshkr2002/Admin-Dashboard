import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <>
      <div className="chart">
        <h3 className="chartTitle"> {title} </h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5a75ba" />
            <Line type="monotone" dataKey={dataKey} stroke="#6acb6a" />
            <Tooltip />
            {grid && <CartesianGrid strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
