import React, { useState } from 'react';

const categories = [
  {
    title: '1. Basic Living',
    fields: ['Rent / Maintenance', 'Groceries', 'Utilities', 'Domestic Help'],
    key: 'basicLiving',
  },
  {
    title: '2. Health & Medical',
    fields: ['Insurance Premium', 'Special Treatments & Equipment', 'Doctor Visits & Medicines'],
    key: 'medical',
  },
  {
    title: '3. Transport',
    fields: ['Cab / Fuel / Driver Salary'],
    key: 'transport',
  },
  {
    title: '4. Leisure & Social',
    fields: ['Outings, Events, Travel', 'Hobbies (Yoga, Music)'],
    key: 'leisure',
  },
  {
    title: '5. Communication & Tech',
    fields: ['Phone, Internet', 'Tech Upgrades, Digital Learning'],
    key: 'communication',
  },
  {
    title: '6. Financial Obligations',
    fields: ['Taxes, Loans, Donations', 'Family Support'],
    key: 'financial',
  },
  {
    title: '7. Savings & Legal',
    fields: ['SIPs, Pensions', 'Estate / Will / Asset Gifting'],
    key: 'savings',
  },
];

const SeniorCitizen = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e, section, field) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const calculateTotal = (sectionKey) => {
    const values = Object.values(formData[sectionKey] || {}).map(Number);
    return values.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : curr), 0);
  };

  const totalIncome =
    Number(formData?.son?.['Monthly Earnings (Adjusted)'] || 0) +
    Number(formData?.daughter?.['Monthly Earnings (Adjusted)'] || 0);

  const totalExpenses = categories.reduce(
    (sum, cat) => sum + calculateTotal(cat.key),
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-2xl font-semibold">Senior Citizens & Retired Couple Overview</div>

        <div className="grid grid-cols-2 gap-6">
          {["Partner 1", "Partner 2"].map((partner, index) => (
            <div key={partner} className="space-y-3">
              <div className="font-medium">{partner}</div>
              {["Name", "Age", "Occupation", "Retirement Year"].map((field) => (
                <input
                  key={field}
                  placeholder={field}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {["Son", "Daughter"].map((child) => (
            <div key={child} className="space-y-3">
              <div className="font-medium">{child}</div>
              {["Name", "Age", "Occupation", "Monthly Earnings (Adjusted)"].map((field) => (
                <input
                  key={field}
                  placeholder={field}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  onChange={(e) => handleInputChange(e, child.toLowerCase(), field)}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="text-lg font-semibold mt-6 flex items-center gap-2">
          <span role="img" aria-label="calendar">📅</span> 10-Year Expense Forecast (2025–2035)
        </div>

        {categories.map(({ title, fields, key }) => (
          <div key={title} className="bg-white p-4 rounded shadow">
            <div className="font-semibold mb-4">{title}</div>
            <div className="grid grid-cols-2 gap-4">
              {fields.map((field) => (
                <input
                  key={field}
                  placeholder={field}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  onChange={(e) => handleInputChange(e, key, field)}
                />
              ))}
            </div>
            <div className="mt-4 font-medium text-right">Total {title.split('. ')[1]}: ₹{calculateTotal(key)}</div>
          </div>
        ))}

        <div className="bg-white p-4 rounded shadow">
          <div className="grid grid-cols-2 font-semibold">
            <div>Overall Expenses</div>
            <div className="text-right">Net Balance (Income – Expenses)</div>
          </div>
          <div className="grid grid-cols-2 font-bold text-blue-600 mt-2">
            <div>₹{totalExpenses}</div>
            <div className="text-right text-green-600">₹{totalIncome - totalExpenses}</div>
          </div>
          <div className="mt-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
              Save & Generate Report
            </button>
          </div>
        </div>

        <footer className="text-sm text-gray-600 text-center mt-10 border-t pt-4">
          © 2025 Retirement Planner. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default SeniorCitizen;