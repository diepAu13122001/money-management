import React, { ReactNode } from "react"
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface dataProps {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  fill: string;
}

interface subChartProps {
  type: string;
  dataKey: string;
  color: string;
  name: string;
}

interface overviewDataProps {
  value: string;
  subtext: string;
}

export interface ChartProps {
  subCharts: subChartProps[];
  data: dataProps[];
  size: string;
  title: string;
  sortBy: string[];
  overview_data: overviewDataProps[];
}


export const Chart = ({ subCharts, data, size, title, sortBy, overview_data }) => {

  function drawChart(charts: subChartProps[]) {
    let pieChart = false;
    charts.forEach(chart => {
      if (chart.type == "pie") {
        pieChart = true;
      }
    })
    if (pieChart) {
      return (
        <PieChart width={730} height={250}>
          <Legend iconSize={10} />
          <Pie data={data} dataKey="value1" nameKey="name" name="expense" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#fff" label />
        </PieChart>
      )
    } else {
      return (
        <ComposedChart width={1000} height={500} data={data}>
          <XAxis dataKey="name" />
          <YAxis axisLine={false} />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" vertical={false} />
          <Legend />
          {charts.map(chart => {
            switch (chart.type) {
              case "area": return (<Area name={chart.name} type="monotone" dataKey={chart.dataKey} stroke={chart.color} fill={chart.color} />);
              case "bar": return (<Bar name={chart.name} dataKey={chart.dataKey} fill={chart.color} />);
              case "line": return (<Line name={chart.name} type="monotone" dataKey={chart.dataKey} stroke={chart.color} />);
            }
          }
          )}
        </ComposedChart>
      )
    }



  }

  function drawOverview(overview_data: overviewDataProps[]) {
    if (size > 2) {
      return (<div className="grid grid-flow-col p-5 divide-x-2 divide-gray-300">
        {overview_data.map(item =>
        (<div className="flex flex-nowrap justify-around items-center">
          <p className="text-[20px] font-semibold">{item.value}</p>
          <p className="text-[16px] font-semibold text-gray-400">{item.subtext}</p>
        </div>)
        )}
      </div>)
    } else return;

  }

  return (
    <div className={`${size} flex flex-col  divide-y divide-gray-200 w-full min-h-[400px] drop-shadow-sm text-sm bg-white rounded-md`}>
      <div className="flex justify-between p-[15px] items-center">
        <p className="capitalize text-sm">{title}</p>
        <label className="font-bold text-xs">
          SORT BY:
          <select name="selectedFruit" className="ml-1 focus:outline-none font-light">
            {sortBy.map(option =>
              <option value="apple">{option}</option>
            )}
          </select>
        </label>
      </div>
      {drawOverview(overview_data)}
      <ResponsiveContainer width="100%" height="100%" style={{ padding: "15px" }}>
        {drawChart(subCharts)}
      </ResponsiveContainer>
    </div>
  );
}