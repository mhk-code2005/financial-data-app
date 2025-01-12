import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Table from "./Table";

const apiKey = "4yyMlLMQ7Oc0zvaCtvh71HKCarsJFvUp";
const apiUrl = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apiKey}`;

const App = () => {
  const [financialData, setFinancialData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState({
    date: "asc",
    revenue: "asc",
    netIncome: "asc",
  });

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFinancialData(data);
        setFilteredData(data); // Initially, filtered data is the same as fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Sorting function for filtered data
  const sortData = (key) => {
    const newSortOrder = sortOrder[key] === "asc" ? "desc" : "asc";
    setSortOrder((prevState) => ({
      ...prevState,
      [key]: newSortOrder,
    }));

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return newSortOrder === "asc" ? -1 : 1;
      if (a[key] > b[key]) return newSortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedData); // Set the sorted filtered data
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-6">AAPL Financial Data</h1>
      <Filters financialData={financialData} setFilteredData={setFilteredData} />
      <Table
        financialData={filteredData}
        sortData={sortData} // Pass the sorting function to Table
        sortOrder={sortOrder} // Pass the sortOrder to Table
      />
    </div>
  );
};

export default App;
