import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

function FreshInvestor() {
  // Get current date and day
  const today = new Date();
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);
  const formattedDay = today.toLocaleDateString('en-US', { weekday: 'long' });

  // Generate years from 2020 to 2034 for career start and milestones
  const careerYears = Array.from({ length: 15 }, (_, i) => 2020 + i);
  const tableYears = Array.from({ length: 10 }, (_, i) => 2025 + i); // 2025-2034

  // Sample data for tables with 5% annual growth
  const incomeCategories = ['Salary', 'Bonuses', 'Investments', 'Other Income'];
  const expenseCategories = ['Rent', 'Utilities', 'Food', 'Transportation', 'Insurance', 'Other'];
  const investmentCategories = ['Yearly Saving Goal', 'Emergency Fund', 'SIP/Mutual Fund', 'RDs/FDs', 'Other Investments', 'Retirement Savings'];

  // Generate table data with 5% annual growth
  const generateTableData = (numRows, baseValues) => {
    return Array(numRows)
      .fill()
      .map((_, rowIndex) =>
        tableYears.map((_, yearIndex) =>
          Math.round(baseValues[rowIndex] * Math.pow(1.05, yearIndex))
        )
      );
  };

  // Sample base values for 2025 (in INR)
  const incomeBaseValues = [500000, 50000, 20000, 10000]; // Salary, Bonuses, Investments, Other Income
  const expenseBaseValues = [120000, 36000, 72000, 48000, 24000, 12000]; // Rent, Utilities, Food, Transportation, Insurance, Other

  const incomeData = generateTableData(4, incomeBaseValues);
  const recurringExpenses = generateTableData(6, expenseBaseValues);
  const lifestyleExpenses = generateTableData(6, expenseBaseValues.map((v) => v * 0.8)); // 80% of recurring for lifestyle
  const investmentData = generateTableData(6, [50000, 20000, 30000, 15000, 10000, 10000]);

  // Calculate totals for each year
  const calculateTotals = (data) =>
    data.reduce((totals, row) => totals.map((total, i) => total + row[i]), Array(10).fill(0));

  const incomeTotals = calculateTotals(incomeData);
  const recurringTotals = calculateTotals(recurringExpenses);
  const lifestyleTotals = calculateTotals(lifestyleExpenses);
  const investmentTotals = calculateTotals(investmentData);

  // Total Annual Expenses Bar Graph Data
  const totalExpensesData = {
    labels: tableYears,
    datasets: [
      {
        label: 'Recurring Expenses',
        data: recurringTotals,
        backgroundColor: '#3B82F6', // Blue
      },
      {
        label: 'Lifestyle Expenses',
        data: lifestyleTotals,
        backgroundColor: '#10B981', // Green
      },
    ],
  };

  // Investment Distribution Pie Chart Data
  const investmentPieData = {
    labels: ['Emergency Fund', 'SIP/Mutual Fund', 'RDs/FDs', 'Other Investments', 'Retirement Savings'],
    datasets: [
      {
        data: [20, 30, 25, 15, 10], // Sample distribution
        backgroundColor: ['#FBBF24', '#10B981', '#3B82F6', '#F97316', '#EC4899'], // Yellow, Green, Blue, Orange, Pink
      },
    ],
  };

  // Savings Growth Projection Line Graph Data
  const savingsGrowthData = {
    labels: tableYears,
    datasets: [
      {
        label: 'Savings Line 1',
        data: tableYears.map((_, i) => 600000 * Math.pow(1.05, i)), // Sample growth
        borderColor: '#FBBF24', // Yellow
        fill: false,
      },
      {
        label: 'Savings Line 2',
        data: tableYears.map((_, i) => 900000 * Math.pow(1.05, i)), // Sample growth
        borderColor: '#3B82F6', // Blue
        fill: false,
      },
    ],
  };

  // Income vs Expenses Bar Graph Data
  const incomeVsExpensesData = {
    labels: tableYears,
    datasets: [
      {
        label: 'Income',
        data: incomeTotals,
        backgroundColor: '#3B82F6', // Blue
      },
      {
        label: 'Expenses',
        data: recurringTotals.map((v, i) => v + lifestyleTotals[i]),
        backgroundColor: '#F97316', // Orange
      },
    ],
  };

  // Milestone Capital vs Savings Graph Data
  const milestoneVsSavingsData = {
    labels: tableYears,
    datasets: [
      {
        type: 'bar',
        label: 'Milestone Capital',
        data: Array(10).fill(500000), // Sample data
        backgroundColor: '#FBBF24', // Yellow
      },
      {
        type: 'line',
        label: 'Cumulative Savings',
        data: tableYears.map((_, i) => 600000 * Math.pow(1.05, i)), // Sample growth
        borderColor: '#10B981', // Green
        fill: false,
        tension: 0.1,
      },
    ],
  };

  // Milestone state for toggle switches
  const [milestones, setMilestones] = React.useState([
    { name: 'Relocation for Job', year: '2025', cost: 100000, adjust: false },
    { name: 'Higher Studies', year: '2027', cost: 800000, adjust: false },
    { name: 'Buy Two Wheeler/Car', year: '2028', cost: 600000, adjust: false },
    { name: 'Marriage Expenses', year: '2028', cost: 600000, adjust: false },
    { name: 'Home Down Payment', year: '2029', cost: 100000, adjust: false },
    { name: 'Child Birth/Raising Child', year: '2032', cost: 500000, adjust: false },
  ]);

  const handleToggle = (index) => {
    setMilestones((prev) =>
      prev.map((m, i) => (i === index ? { ...m, adjust: !m.adjust } : m))
    );
  };

  const addMilestone = () => {
    setMilestones([...milestones, { name: 'New Milestone', year: '2025', cost: 0, adjust: false }]);
  };

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
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              min="0"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
          <div>
            <label className="block text-sm font-medium text-gray-700">Year of Career Start</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select year</option>
              {careerYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
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
                {tableYears.map((year) => (
                  <th key={year} className="py-2 px-4 border-b text-center">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {incomeCategories.map((category, index) => (
                <tr key={category}>
                  <td className="py-2 px-4 border-b">{category}</td>
                  {incomeData[index].map((value, i) => (
                    <td key={i} className="py-2 px-4 border-b text-center">₹{value.toLocaleString('en-IN')}</td>
                  ))}
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-2 px-4 border-b">Total Expected Income</td>
                {incomeTotals.map((total, i) => (
                  <td key={i} className="py-2 px-4 border-b text-center">₹{total.toLocaleString('en-IN')}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Expected Expenses Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Expected Expenses</h2>
          <p className="text-lg">Step 3 of 5</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Recurring Expenses (Adjusted for Inflation)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b text-left">CATEGORY/YEAR</th>
                  {tableYears.map((year) => (
                    <th key={year} className="py-2 px-4 border-b text-center">{year}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {expenseCategories.map((category, index) => (
                  <tr key={category}>
                    <td className="py-2 px-4 border-b">{category}</td>
                    {recurringExpenses[index].map((value, i) => (
                      <td key={i} className="py-2 px-4 border-b text-center">₹{value.toLocaleString('en-IN')}</td>
                    ))}
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="py-2 px-4 border-b">Total Recurring Expenses</td>
                  {recurringTotals.map((total, i) => (
                    <td key={i} className="py-2 px-4 border-b text-center">₹{total.toLocaleString('en-IN')}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Lifestyle Expenses (Adjusted for Inflation)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b text-left">CATEGORY/YEAR</th>
                  {tableYears.map((year) => (
                    <th key={year} className="py-2 px-4 border-b text-center">{year}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {expenseCategories.map((category, index) => (
                  <tr key={category}>
                    <td className="py-2 px-4 border-b">{category}</td>
                    {lifestyleExpenses[index].map((value, i) => (
                      <td key={i} className="py-2 px-4 border-b text-center">₹{value.toLocaleString('en-IN')}</td>
                    ))}
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="py-2 px-4 border-b">Total Lifestyle Expenses</td>
                  {lifestyleTotals.map((total, i) => (
                    <td key={i} className="py-2 px-4 border-b text-center">₹{total.toLocaleString('en-IN')}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Total Annual Expenses */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Total Annual Expenses</h2>
        <div className="w-full max-w-md mx-auto">
          <Bar
            data={totalExpensesData}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                x: { title: { display: true, text: 'Year' } },
                y: {
                  title: { display: true, text: 'INR (₹)' },
                  ticks: { callback: (value) => `₹${value / 1000}K`, stepSize: 100000, max: 700000 },
                  stacked: true,
                },
              },
            }}
            height={80}
          />
        </div>
        <div className="flex items-center mt-4">
          <div className="flex items-center mr-4">
            <div className="w-4 h-4 bg-blue-500 mr-2"></div>
            <span>Recurring Expenses</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 mr-2"></div>
            <span>Lifestyle Expenses</span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <h3 className="text-xl font-semibold">Total Expenses (2025-2034)</h3>
            <p className="text-lg">₹4,632,500</p>
            <div className="flex justify-between">
              <div>
                <p>Recurring</p>
                <p>₹3,546,964</p>
              </div>
              <div>
                <p>Lifestyle</p>
                <p>₹1,585,813</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-semibold">Expense Growth</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-blue-900 h-4 rounded-full" style={{ width: '55%' }}></div>
            </div>
            <p className="text-right">+55%</p>
          </div>
        </div>
      </div>

      {/* Milestone-Based Capital */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Milestone-Based Capital</h2>
          <p className="text-lg">Step 4 of 5</p>
        </div>
        {milestones.map((milestone, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">{milestone.name}</label>
              <select
                value={milestone.year}
                onChange={(e) =>
                  setMilestones((prev) =>
                    prev.map((m, i) =>
                      i === index ? { ...m, year: e.target.value } : m
                    )
                  )
                }
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                {tableYears.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Estimated Cost</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₹</span>
                <input
                  type="number"
                  value={milestone.cost}
                  onChange={(e) =>
                    setMilestones((prev) =>
                      prev.map((m, i) =>
                        i === index ? { ...m, cost: parseInt(e.target.value) || 0 } : m
                      )
                    )
                  }
                  className="mt-1 block w-full pl-8 p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={milestone.adjust}
                  onChange={() => handleToggle(index)}
                  className select-none="mr-2"
                />
                Adjust for Inflation
              </label>
            </div>
          </div>
        ))}
        <button
          onClick={addMilestone}
          className="mt-4 px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-md"
        >
          + Add Another Milestone
        </button>
        <h3 className="text-xl font-semibold mt-8 mb-4">Milestone Timeline</h3>
        <div className="w-full max-w-md mx-auto">
          <Bar
            data={{
              labels: tableYears,
              datasets: [
                {
                  label: 'Milestone Capital',
                  data: milestones
                    .map((m) =>
                      tableYears.map((y) => (y === m.year ? m.cost : 0))
                    )
                    .reduce((acc, curr) => acc.map((v, i) => v + curr[i]), Array(10).fill(0)),
                  backgroundColor: '#3B82F6',
                },
              ],
            }}
            options={{
              scales: {
                x: { title: { display: true, text: 'Year' } },
                y: {
                  title: { display: true, text: 'INR (₹)' },
                  ticks: { callback: (value) => `₹${value / 100000}L`, stepSize: 500000, max: 2000000 },
                },
              },
            }}
            height={80}
          />
        </div>
        <p className="mt-4 text-lg">Total Milestone Capital Required: ₹5,000,000</p>
      </div>

      {/* Saving and Investment Plan */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Saving and Investment Plan</h2>
          <p className="text-lg">Step 5 of 5</p>
        </div>
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold">Investment Allocation</h3>
          <div className="text-right">
            <p>Target Saving (%)</p>
            <p className="text-lg font-bold">20</p>
          </div>
        </div>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left">CATEGORY/YEAR</th>
                {tableYears.map((year) => (
                  <th key={year} className="py-2 px-4 border-b text-center">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {investmentCategories.map((category, index) => (
                <tr key={category}>
                  <td className="py-2 px-4 border-b">{category}</td>
                  {investmentData[index].map((value, i) => (
                    <td key={i} className="py-2 px-4 border-b text-center">₹{value.toLocaleString('en-IN')}</td>
                  ))}
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-2 px-4 border-b">Total</td>
                {investmentTotals.map((total, i) => (
                  <td key={i} className="py-2 px-4 border-b text-center">₹{total.toLocaleString('en-IN')}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 max-w-md">
            <h3 className="text-xl font-semibold mb-4">Investment Distribution</h3>
            <Pie
              data={investmentPieData}
              options={{ plugins: { legend: { position: 'right' } } }}
              height={80}
            />
          </div>
          <div className="w-1/2 max-w-md">
            <h3 className="text-xl font-semibold mb-4">Savings Growth Projection</h3>
            <Line
              data={savingsGrowthData}
              options={{
                scales: {
                  x: { title: { display: true, text: 'Year' } },
                  y: {
                    title: { display: true, text: 'INR (₹)' },
                    ticks: { callback: (value) => `₹${value / 1000}K`, stepSize: 300000, max: 1800000 },
                  },
                },
              }}
              height={80}
            />
          </div>
        </div>
      </div>

      {/* Summary Dashboard */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Summary Dashboard</h2>
          <p className="text-lg">Overview</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <p className="text-lg font-semibold">Total Income</p>
            <p className="text-lg">₹10,040,178</p>
            <p className="text-green-500">↑ 164% Growth over 10 years</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Total Expenses</p>
            <p className="text-lg">₹5,132,777</p>
            <p className="text-red-500">↑ 55% Growth over 10 years</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Total Savings</p>
            <p className="text-lg">₹1,855,000</p>
            <p className="text-green-500">↑ 110% Growth over 10 years</p>
          </div>
        </div>
        <div className="flex justify-between mb-8">
          <div className="w-1/2 max-w-md">
            <h3 className="text-xl font-semibold mb-4">Income vs Expenses</h3>
            <Bar
              data={incomeVsExpensesData}
              options={{
                scales: {
                  x: { title: { display: true, text: 'Year' } },
                  y: {
                    title: { display: true, text: 'INR (₹)' },
                    ticks: { callback: (value) => `₹${value / 100000}L`, stepSize: 300000, max: 1800000 },
                  },
                },
              }}
              height={80}
            />
          </div>
          <div className="w-1/2 max-w-md">
            <h3 className="text-xl font-semibold mb-4">Milestone Capital vs Savings</h3>
            <Bar
              data={milestoneVsSavingsData}
              options={{
                scales: {
                  x: { title: { display: true, text: 'Year' } },
                  y: {
                    title: { display: true, text: 'INR (₹)' },
                    ticks: { callback: (value) => `₹${value / 100000}L`, stepSize: 500000, max: 2000000 },
                  },
                },
              }}
              height={80}
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Financial Health Indicators</h3>
          <div className="mb-4">
            <p>Savings Rate</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <p className="text-right">20%</p>
            <p className="text-sm">Target: 20-25% of income</p>
          </div>
          <div className="mb-4">
            <p>Emergency Fund</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <p className="text-right">6 months</p>
            <p className="text-sm">Target: 6 months of expenses</p>
          </div>
          <div>
            <p>Milestone Readiness</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-right">75%</p>
            <p className="text-sm">Target: 100% milestone funding</p>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <button className="px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-md">
            Save as Draft
          </button>
          <div>
            <button className="px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-md mr-2">
              Print Report
            </button>
            <button className="px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-md">
              Export as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreshInvestor;