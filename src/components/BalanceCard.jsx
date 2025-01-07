import React from "react";

function BalanceCard({
  label,
  income,
  expense,
  addIncome,
  addExpense,
  balance,
  addtransactions,
}) {
  function reset() {
    addExpense(0);
    addIncome(0);
    addtransactions([]);
  }

  return (
    <div className="flex flex-col justify-around items-center md:flex-row h-auto w-auto rounded-xl ring-2 shadow-2xl">
      <div className="card">
        <h2 className="text-center font-mono font-bold text-gray-400">
          Current Balance
        </h2>
        <p className="mt-2 text-center font-mono font-bold text-gray-700">
          {`${balance} ${label}`}
        </p>
      </div>
      <div className="card">
        <h2 className="text-center font-mono font-bold text-gray-400">
          Income
        </h2>
        <p className="mt-2 text-center font-mono font-bold text-green-500">{` + ${income} ${label}`}</p>
      </div>
      <div className="card">
        <h2 className="text-center font-mono font-bold text-gray-400">
          Expenses
        </h2>
        <p className="mt-2 text-center font-mono font-bold text-red-500">{`- ${expense} ${label}`}</p>
      </div>
      <div className="text-center flex flex-col">
        <button
          className="bg-blue-400 hover:bg-blue-500 rounded-lg hover:drop-shadow-md p-3 m-3 text-white"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default BalanceCard;
