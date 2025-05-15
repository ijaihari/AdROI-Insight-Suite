import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setDataCount } from "../store/FilterSlice";
import { useEffect, useMemo, useState } from "react";
import { Radar } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function FilteredTable() {
  const dispatch = useDispatch();
  const { mockData, AddedFilter, dataCount } = useSelector((state) => state.filter);
  const { id } = useParams();

  const [sortMetric, setSortMetric] = useState(""); // no default sort selected
  const [sortOrder, setSortOrder] = useState("desc");
  const [viewMode, setViewMode] = useState("table"); // "chart" or "table"

  const metricOptions = [
    { label: "Installs Per Mille (IPM)", value: "IPM" },
    { label: "Click Through Rate (CTR)", value: "CTR" },
    { label: "Ad Spend (Spend)", value: "Spend" },
    { label: "Ad Impressions (Impressions)", value: "Impressions" },
    { label: "Ad Clicks (Clicks)", value: "Clicks" },
    { label: "Cost Per Mille (CPM)", value: "CPM" },
    { label: "Cost Per Click (CPC)", value: "CPC" },
    { label: "Cost Per Install (CPI)", value: "CPI" },
    { label: "App Installs (Installs)", value: "Installs" },
  ];

  function useTableTitle(id) {
    const AddedFilter = useSelector((state) => state.filter.AddedFilter);
    const filter = AddedFilter.find((filter) => filter.id === Number(id));
    return filter ? `Filter: ${filter.value} (${dataCount})` : "Insight Table";
  }

  const title = useTableTitle(id);

  const filteredData = useMemo(() => {
    let result = mockData;

    if (AddedFilter.length > 0 && id) {
      const activeFilter = AddedFilter.find((filter) => filter.id === Number(id));
      if (activeFilter) {
        const { componentName, value } = activeFilter;

        result = mockData.filter((item) => {
          if (componentName.toLowerCase() === "tags") {
            return Array.isArray(item.Tags) && item.Tags.includes(value);
          }
          return item[componentName] === value;
        });
      }
    }

    const activeMetric = sortMetric || "Impressions";

    if (activeMetric) {
      result = [...result].sort((a, b) => {
        const aVal = parseFloat(a[activeMetric]) || 0;
        const bVal = parseFloat(b[activeMetric]) || 0;
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      });
    }

    return result;
  }, [AddedFilter, id, mockData, sortMetric, sortOrder]);

  useEffect(() => {
    dispatch(setDataCount(filteredData.length));
  }, [filteredData, dispatch]);

  const activeMetric = sortMetric || "Impressions";

  // Radar chart data setup
  const radarData = {
    labels: filteredData.map((item) => `${item.campaign}`),
    datasets: [
      {
        label: activeMetric,
        data: filteredData.map((item) => parseFloat(item[activeMetric]) || 0),
        backgroundColor: "rgba(255, 99, 132, 0.2)", // light red fill
        borderColor: "rgba(255, 99, 132, 1)", // red border
        borderWidth: 2,
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // red points
        pointRadius: 5,
      },
    ],
  };

  const radarOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const i = context.dataIndex;
            const item = filteredData[i];

            if (!item) return "No data";

            return [
              `Value: ${item?.[activeMetric] ?? "N/A"}`,
              `Campaign: ${item?.campaign ?? "N/A"}`,
              `Ad Network: ${item?.ad_network ?? "N/A"}`,
              `Ad Group: ${item?.Ad_Group ?? "N/A"}`,
              `Country: ${item?.country ?? "N/A"}`,
            ];
          },
        },
      },
    },
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  const barData = {
    labels: filteredData.map((item) => `${item.campaign}`),
    datasets: [
      {
        label: activeMetric,
        data: filteredData.map((item) => parseFloat(item[activeMetric]) || 0),
        backgroundColor: "rgba(59, 130, 246, 0.6)", // Tailwind's blue-500
        borderColor: "rgba(30, 64, 175, 1)", // Tailwind's blue-800
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const i = context.dataIndex;
            const item = filteredData[i];
            return [
              `Value: ${item?.[activeMetric] ?? "N/A"}`,
              `Campaign: ${item?.campaign ?? "N/A"}`,
              `Ad Network: ${item?.ad_network ?? "N/A"}`,
              `Ad Group: ${item?.Ad_Group ?? "N/A"}`,
              `Country: ${item?.country ?? "N/A"}`,
            ];
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="table-container">
      <section className="table-tools">
        <span className="active-filter">{title}</span>

        <div className="toolsgroup">
          <section className="sort-controls">
            <div className="custom-dropdown sortby">
              <label>Sort by</label>
              <select value={sortMetric} onChange={(e) => setSortMetric(e.target.value)}>
                <option value="">Select Metric</option>
                {metricOptions.map((metric) => (
                  <option key={metric.value} value={metric.value}>
                    {metric.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="custom-dropdown sortorder">
              <label>Order</label>
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="desc">High to Low</option>
                <option value="asc">Low to High</option>
              </select>
            </div>
          </section>

          <section className="data-view">
            <button onClick={() => setViewMode("chart")}>
              <span className="material-symbols-outlined">radar</span>
            </button>
            <button onClick={() => setViewMode("table")}>
              <span className="material-symbols-outlined">table</span>
            </button>
          </section>
        </div>
      </section>

      {viewMode === "chart" ? (
        <div className="chart-grid">
          <div style={{ width: "55%" }}>
            <Radar data={radarData} options={radarOptions} />
          </div>
          <div style={{ width: "70%" }}>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      ) : viewMode === "table" ? (
        filteredData.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Creative ID</th>
                <th>Creative Name</th>
                <th>Tags</th>
                <th>Country</th>
                <th>Ad Network</th>
                <th>OS</th>
                <th>Campaign</th>
                <th>Ad Group</th>
                <th>IPM</th>
                <th>CTR</th>
                <th>Spend</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CPM</th>
                <th>CPC</th>
                <th>CPI</th>
                <th>Installs</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{Array.isArray(value) ? value.join(" ") : value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">No matching data found</p>
        )
      ) : (
        <p className="no-data">Select a metric to show radar chart</p>
      )}
    </div>
  );
}

export default FilteredTable;