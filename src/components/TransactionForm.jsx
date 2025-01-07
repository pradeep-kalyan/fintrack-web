import React, { useState } from "react";

const TransactionForm = ({ addExpense, addIncome, addTransactions }) => {
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState("Nil");
  const [category, setCategory] = useState("");
  const [datetime, setDatetime] = useState("");
  const [selectedType, setSelectedType] = useState("income");

  const handleSubmit = (event) => {
    event.preventDefault();
    const transaction = {
      amount: Number(amount),
      desc,
      category,
      type: selectedType,
      datetime,
    };

    if (selectedType === "income") {
      addIncome((prev) => prev + Number(amount));
    } else if (selectedType === "expense") {
      addExpense((prev) => prev + Number(amount));
    }

    addTransactions((prev) => [...prev, transaction]);

    setAmount(0);
    setDesc("");
    setCategory("");
    setDatetime("");
    setSelectedType("income");
  };

  return (
    <div className="rounded-xl shadow-2xl w-auto h-auto m-10 p-10 text-center">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center font-[cursive] text-2xl font-semibold text-green-400">
          Add Your Transactions
        </h2>

        {/* Amount Input */}
        <div className="p-2 m-3">
          <label htmlFor="amount" className="formtext mx-1">
            Amount (in Rs)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount rounded-lg p-2 border border-gray-300"
            required
          />
        </div>

        {/* Date and Time Input */}
        <div className="p-2 m-3">
          <label htmlFor="transaction-dt">Date & Time</label>
          <input
            type="datetime-local"
            id="transaction-dt"
            name="transaction-dt"
            value={datetime}
            min="2025-01-01T00:00"
            onChange={(e) => setDatetime(e.target.value)}
          />
        </div>

        {/* Description Input */}
        <div className="p-2 m-3">
          <label htmlFor="desc" className="formtext mx-1">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="desc rounded-lg p-2 border border-gray-300"
          />
        </div>

        {/* Category Dropdown */}
        <div className="p-2 m-3">
          <label htmlFor="category" className="formtext mx-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-center font-mono rounded-lg p-2 border border-gray-300"
          >
            <option value="">Select a category</option>
            <option value="salary">Salary/Wages</option>
            <option value="groceries">Groceries</option>
            <option value="rent">Rent/Mortgage</option>
            <option value="transport">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="education">Education</option>
          </select>
        </div>

        {/* Income/Expense Radio Buttons */}
        <div className="flex flex-row justify-center items-center w-auto h-auto">
          <div className="p-3 m-3">
            <input
              type="radio"
              name="type"
              value="income"
              checked={selectedType === "income"}
              onChange={() => setSelectedType("income")}
            />
            <label className="text-green-500 text-center ml-2">Income</label>
          </div>
          <div className="p-3 m-3">
            <input
              type="radio"
              name="type"
              value="expense"
              checked={selectedType === "expense"}
              onChange={() => setSelectedType("expense")}
            />
            <label className="text-red-500 ml-2">Expense</label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
