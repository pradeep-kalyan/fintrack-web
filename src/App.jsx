import React, { useEffect, useState } from "react";
import BalanceCard from "./components/BalanceCard";
import TransactionForm from "./components/TransactionForm";
import TransList from "./components/Translist";

function App() {
  const [expense, addexpense] = useState(0);
  const [income, addincome] = useState(0);
  const [transactions, addtransactions] = useState([]);
  const balance = income - expense;
  const [sortedTransactions, setSortedTransactions] = useState([]);

  useEffect(() => {
    setSortedTransactions([...transactions]);
  }, [transactions]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.gstatic.com/charts/loader.js";
    script.async = true;
    script.onload = () => {
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawExpenseCategoryChart);
      google.charts.setOnLoadCallback(drawIncomeCategoryChart);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [income, expense]);

  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ["Category", "Amount"],
      ["Current Balance", balance],
      ["Income", income],
      ["Expenses", expense],
    ]);

    const options = {
      title: "Financial Overview",
      pieHole: 0.4,
    };

    const chart = new google.visualization.PieChart(
      document.getElementById("piechart")
    );

    chart.draw(data, options);
  }
  // function drawExpenseCategoryChart() {
  //   const data = google.visualization.arrayToDataTable([
  //     ["Category", "Amount"],
  //     ["Groceries", expense * 0.3],
  //     ["Entertainment", expense * 0.2],
  //     ["Education", expense * 0.2],
  //     ["Rent/Mortgage", expense * 0.2],
  //     ["Transportation", expense * 0.1],
  //   ]);

  //   const options = {
  //     title: "Expense Categories",
  //     pieHole: 0.4,
  //   };

  //   const chart = new google.visualization.PieChart(
  //     document.getElementById("expenseCategoryPiechart")
  //   );

  //   chart.draw(data, options);
  // }

  // function drawIncomeCategoryChart() {
  //   const data = google.visualization.arrayToDataTable([
  //     ["Category", "Amount"],
  //     ["Groceries", income * 0.3],
  //     ["Entertainment", income * 0.2],
  //     ["Education", income * 0.2],
  //     ["Rent/Mortgage", income * 0.2],
  //     ["Transportation", income * 0.1],
  //   ]);

  //   const options = {
  //     title: "Income Categories",
  //     pieHole: 0.4,
  //   };

  //   const chart = new google.visualization.PieChart(
  //     document.getElementById("incomeCategoryPiechart")
  //   );

  //   chart.draw(data, options);
  // }

  return (
    <>
      <div className="flex justify-start m-5 p-5 items-center flex-col w-full h-auto bg-gray-100">
        <h2 className="text-3xl text-green-500 font-mono font-semibold hover:drop-shadow-md m-5 p-5">
          FinTrack - Your Financial Expert
        </h2>
        <p className="text-2xl text-red-500 font-[cursive] font-light">
          Track your money, stay in control!
        </p>
        <div className="m-5 p-5 text-center">
          <BalanceCard
            income={income}
            expense={expense}
            addIncome={addincome}
            addExpense={addexpense}
            label="Rs"
            balance={balance}
            addtransactions={addtransactions}
          />
        </div>
        <div className="m-5 p-5 text-center">
          <TransactionForm
            addExpense={addexpense}
            addIncome={addincome}
            addtransactions={addtransactions}
          />
        </div>
        <div className="m-5 p-5 text-center">
          <p className="text-2xl text-red-500 font-[cursive] font-light">
            View Transactions!
          </p>
          <TransList transactions={transactions} />
        </div>
        <div className="m-5 p-5 flex flex-col">
          <p className="text-2xl text-red-500 font-[cursive] font-light">
            Your Stats
          </p>{" "}
          {sortedTransactions.length === 0 ? (
            <p className="">No Transactions Yet 😔 </p>
          ) : (
            <div className="m-5 p-5 flex flex-col md:flex-row">
              <div id="piechart" className="mx-1 w-[500px] h-[400px]"></div>
              {/* <div
                className="mx-1"
                id="expenseCategoryPiechart"
                style={{ width: "300px", height: "300px" }}
              ></div>
              <div
                className="mx-1"
                id="incomeCategoryPiechart"
                style={{ width: "300px", height: "300px" }}
              ></div> */}
            </div>
          )}
        </div>
        <div className="m-5 p-5 font-[cursive] text-center text-xl">
          <p className="text-2xl text-red-500 font-[cursive] font-light">
            About
          </p>
          <p class="text-lg text-gray-600 leading-relaxed  about-font">
            As a college student, I faced many challenges when it came to
            tracking my finances. Between managing online transactions and
            keeping track of offline expenses, I found that existing tools were
            either too complex or didn't account for offline payments. This
            frustration led me to create{" "}
            <strong class="text-blue-500">Fintrack</strong> – a simple,
            intuitive financial tracker that brings all your transactions
            together in one place.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed  about-font mt-4">
            Through <strong class="text-blue-500">Fintrack</strong>, I aim to
            help students and young professionals like myself take control of
            their finances. Whether it's tracking income, managing expenses, or
            setting budgets, Fintrack makes it easy to stay on top of your
            financial health.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mt-4 about-font">
            This project was built using{" "}
            <strong class="text-blue-500">React.js</strong> and{" "}
            <strong class="text-blue-500">Tailwind CSS</strong> to ensure a
            smooth and responsive experience. My goal is to help users make
            informed financial decisions and empower them to build better
            financial habits.
          </p>
        </div>
        <div className="m-3 p-3 text-center text-xl">
          <p className="text-2xl text-red-500 font-[cursive] font-light">
            Contact Me
          </p>
          <p className="p-3 m-3 font-[cursive]">
            For Queries & further ideas Connect with me @{" "}
            <a
              href="mailto:pradeepkalyan1275@gmail.com"
              className="text-blue-500 hover:drop-shadow-lg"
            >
              pradeepkalyan1275@gmail.com
            </a>
            <p>or</p>
            <a
              href="https://www.linkedin.com/in/pradeep-kalyan/"
              className="text-blue-500 hover:drop-shadow-lg"
            >
              @linkedin
            </a>
          </p>
        </div>
        <div className="m-2 p-2">
          <p className="text-red-500 font-mono font-semibold text-center">
            The app is currently in development. You can leave your feedback in
            the "Contact Me" section. Please note that storage options are
            disabled during this phase, so any data entered will be lost when
            the page is reloaded.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
