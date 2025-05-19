import React from 'react';

function FreshInvestor() {
  // Get current date and day
  const today = new Date();
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);
  const formattedDay = today.toLocaleDateString('en-US', { weekday: 'long' });

  // Generate years from 2020 to 2030 for career start
  const years = Array.from({ length: 11 }, (_, i) => 2020 + i);

  // Sample data for tables
  const incomeCategories = ['Salary', 'Bonuses', 'Investments', 'Other Income'];
  const expenseCategories = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
  ];

  // Generate placeholder data for tables (zeros for now)
  const generateTableData = (numRows) =>
    Array(numRows).fill().map(() => Array(8).fill(0)); // 8 years (2025-2032)

  const incomeData = generateTableData(4); // 4 rows for income
  const recurringExpenses = generateTableData(6); // 6 rows for recurring expenses
  const lifestyleExpenses = generateTableData(6); // 6 rows for lifestyle expenses

  // Calculate totals for each year
  const calculateTotals = (data) =>
    data.reduce(
      (totals, row) =>
        totals.map((total, i) => total + row[i]),
      Array(8).fill(0)
    );

  const incomeTotals = calculateTotals(incomeData);
  const recurringTotals = calculateTotals(recurringExpenses);
  const lifestyleTotals = calculateTotals(lifestyleExpenses);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold">Capital Need Analysis</h1>
          <p className="text-lg">10-Year Forecast for Freshers (2025-2034)</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">Today: {formattedDate}</p>
          <p className="text-lg">{formattedDay}</p>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Personal Information</h2>
          <p className="text-lg">Step 1 of 5</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              min="0"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Qualification */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Qualification</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your qualification</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          {/* Year of Career Start */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Year of Career Start</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Industry</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your industry</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
          {/* Expected Starting Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Expected Starting Salary (Annual)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₹</span>
              <input
                type="number"
                placeholder="Enter amount"
                min="0"
                className="mt-1 block w-full pl-8 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expected Income Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Expected Income</h2>
          <p className="text-lg">Step 2 of 5</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left">CATEGORY/YEAR</th>
                {['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'].map((year) => (
                  <th key={year} className="py-2 px-4 border-b text-center">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {incomeCategories.map((category, index) => (
                <tr key={category}>
                  <td className="py-2 px-4 border-b">{category}</td>
                  {incomeData[index].map((value, i) => (
                    <td key={i} className="py-2 px-4 border-b text-center">{value}</td>
                  ))}
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-2 px-4 border-b">Total Expected Income</td>
                {incomeTotals.map((total, i) => (
                  <td key={i} className="py-2 px-4 border-b text-center">{total}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Expected Expenses Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Expected Expenses</h2>
          <p className="text-lg">Step 3 of 5</p>
        </div>

        {/* Recurring Expenses */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Recurring Expenses (Adjusted for Inflation)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b text-left">CATEGORY/YEAR</th>
                  {['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'].map((year) => (
                    <th key={year} className="py-2 px-4 border-b text-center">{year}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {expenseCategories.map((category, index) => (
                  <tr key={category}>
                    <td className="py-2 px-4 border-b">{category}</td>
                    {recurringExpenses[index].map((value, i) => (
                      <td key={i} className="py-2 px-4 border-b text-center">{value}</td>
                    ))}
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="py-2 px-4 border-b">Total Recurring Expenses</td>
                  {recurringTotals.map((total, i) => (
                    <td key={i} className="py-2 px-4 border-b text-center">{total}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Lifestyle Expenses */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Lifestyle Expenses (Adjusted for Inflation)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b text-left">CATEGORY/YEAR</th>
                  {['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'].map((year) => (
                    <th key={year} className="py-2 px-4 border-b text-center">{year}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {expenseCategories.map((category, index) => (
                  <tr key={category}>
                    <td className="py-2 px-4 border-b">{category}</td>
                    {lifestyleExpenses[index].map((value, i) => (
                      <td key={i} className="py-2 px-4 border-b text-center">{value}</td>
                    ))}
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="py-2 px-4 border-b">Total Recurring Expenses</td>
                  {lifestyleTotals.map((total, i) => (
                    <td key={i} className="py-2 px-4 border-b text-center">{total}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreshInvestor;