import React, { useEffect, useState } from "react";

const TransList = ({ transactions }) => {
  const [sortedTransactions, setSortedTransactions] = useState([]);

  // Using useEffect to update transactions on change
  useEffect(() => {
    setSortedTransactions([...transactions]);
  }, [transactions]);

  return (
    <div className="max-w-lg mx-auto bg-transparent">
      <h2 className="text-xl font-bold text-center mb-4">
        Transaction History
      </h2>
      {sortedTransactions.length === 0 ? (
        <p className="text-center text-gray-500 font-mono">
          No transactions yet!
        </p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border p-4">#</th>
              <th className="border p-4">Description</th>
              <th className="border p-4">Amount (₹)</th>
              <th className="border p-4">Category</th>
              <th className="border p-4">Type</th>
              <th className="border p-4">Date&time</th>
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
                <td className="border p-4">{transaction.datetime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransList;
