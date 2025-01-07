import React, { useEffect, useState } from "react";

const TransList = ({ transactions }) => {
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [sortBy, setSortBy] = useState("datetime"); // Default sorting by datetime

  // Sorting function
  const sortTransactions = (field) => {
    const sorted = [...transactions].sort((a, b) => {
      if (field === "amount") {
        return a.amount - b.amount; // Sorting by amount
      }
      if (field === "datetime") {
        return new Date(b.datetime) - new Date(a.datetime); // Sorting by datetime
      }
      return a[field].localeCompare(b[field]); // Sorting by description/category/type
    });
    setSortedTransactions(sorted);
    setSortBy(field); // Set the field by which we are sorting
  };

  // Using useEffect to update transactions on change
  useEffect(() => {
    setSortedTransactions([...transactions]);
  }, [transactions]);

  // Helper function to format datetime
  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleString(); // Formats datetime as "MM/DD/YYYY, HH:MM:SS AM/PM"
  };

  return (
    <div className="max-w-full mx-auto bg-transparent">
      <h2 className="text-xl font-bold text-center mb-4">
        Transaction History
      </h2>
      {sortedTransactions.length === 0 ? (
        <p className="text-center text-gray-500 font-mono">
          No transactions yet!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th
                  className="border p-1 cursor-pointer"
                  onClick={() => sortTransactions("s.no")}
                >
                  # S.No {sortBy === "s.no" ? "▼" : "▲"}
                </th>
                <th
                  className="border p-4 cursor-pointer"
                  onClick={() => sortTransactions("desc")}
                >
                  Description {sortBy === "desc" ? "▼" : "▲"}
                </th>
                <th
                  className="border p-4 cursor-pointer"
                  onClick={() => sortTransactions("amount")}
                >
                  Amount (₹) {sortBy === "amount" ? "▼" : "▲"}
                </th>
                <th
                  className="border p-4 cursor-pointer"
                  onClick={() => sortTransactions("category")}
                >
                  Category {sortBy === "category" ? "▼" : "▲"}
                </th>
                <th
                  className="border p-4 cursor-pointer"
                  onClick={() => sortTransactions("type")}
                >
                  Type {sortBy === "type" ? "▼" : "▲"}
                </th>
                <th
                  className="border p-4 cursor-pointer"
                  onClick={() => sortTransactions("datetime")}
                >
                  DateTime {sortBy === "datetime" ? "▼" : "▲"}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedTransactions.map((transaction, index) => (
                <tr
                  key={index}
                  className={`${
                    transaction.type === "income"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  <td className="border p-4">{index + 1}</td>
                  <td className="border p-4">{transaction.desc}</td>
                  <td className="border p-4">₹{transaction.amount}</td>
                  <td className="border p-4">{transaction.category}</td>
                  <td className="border p-4">{transaction.type}</td>
                  <td className="border p-4">
                    {formatDateTime(transaction.datetime)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransList;
