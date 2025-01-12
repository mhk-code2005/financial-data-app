import React from "react";

const Table = ({ financialData, sortData, sortOrder }) => {
  return (
    <table className="table-auto w-full bg-white shadow-md rounded">
      <thead>
        <tr className="bg-gray-200 text-gray-600">
          <th
            className="px-4 py-2 cursor-pointer"
            onClick={() => sortData("date")}
          >
            Date
            {sortOrder.date === "asc" ? " ↑" : " ↓"}
          </th>
          <th
            className="px-4 py-2 cursor-pointer"
            onClick={() => sortData("revenue")}
          >
            Revenue
            {sortOrder.revenue === "asc" ? " ↑" : " ↓"}
          </th>
          <th
            className="px-4 py-2 cursor-pointer"
            onClick={() => sortData("netIncome")}
          >
            Net Income
            {sortOrder.netIncome === "asc" ? " ↑" : " ↓"}
          </th>
          <th className="px-4 py-2">Gross Profit</th>
          <th className="px-4 py-2">EPS</th>
          <th className="px-4 py-2">Operating Income</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(financialData) && financialData.length > 0 ? (
          financialData.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.date}</td>
              <td className="border px-4 py-2">{row.revenue}</td>
              <td className="border px-4 py-2">{row.netIncome}</td>
              <td className="border px-4 py-2">{row.grossProfit}</td>
              <td className="border px-4 py-2">{row.eps}</td>
              <td className="border px-4 py-2">{row.operatingIncome}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center py-4">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
