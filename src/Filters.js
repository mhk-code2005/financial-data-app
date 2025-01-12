import React, { useState } from "react";

const Filters = ({ financialData, setFilteredData }) => {
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [revenueMin, setRevenueMin] = useState("");
  const [revenueMax, setRevenueMax] = useState("");

  const applyFilters = () => {
    let data = [...financialData];

    if (startYear) data = data.filter(row => new Date(row.date).getFullYear() >= startYear);
    if (endYear) data = data.filter(row => new Date(row.date).getFullYear() <= endYear);
    if (revenueMin) data = data.filter(row => row.revenue >= revenueMin);
    if (revenueMax) data = data.filter(row => row.revenue <= revenueMax);

    setFilteredData(data);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        value={startYear}
        onChange={(e) => setStartYear(e.target.value)}
        className="p-2 border rounded"
        placeholder="Start Year"
      />
      <input
        type="text"
        value={endYear}
        onChange={(e) => setEndYear(e.target.value)}
        className="p-2 border rounded"
        placeholder="End Year"
      />
      <input
        type="text"
        value={revenueMin}
        onChange={(e) => setRevenueMin(e.target.value)}
        className="p-2 border rounded"
        placeholder="Min Revenue"
      />
      <input
        type="text"
        value={revenueMax}
        onChange={(e) => setRevenueMax(e.target.value)}
        className="p-2 border rounded"
        placeholder="Max Revenue"
      />
      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
