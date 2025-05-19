import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { PlusCircle } from 'lucide-react';

export default function JointFamily() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showNewGoalForm, setShowNewGoalForm] = useState(false);

    // Data for the expense distribution chart
    const expenseData = [
        { name: 'Household', value: 38500, color: '#3B82F6' },
        { name: 'Education', value: 33700, color: '#10B981' },
        { name: 'Medical', value: 23800, color: '#F59E0B' },
        { name: 'Festivals', value: 34000, color: '#F97316' },
        { name: 'Others', value: 7000, color: '#94A3B8' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                <div className="text-blue-600 font-bold text-xl">Financial Planner</div>
                <div className="flex items-center space-x-4">
                    <button className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                    <button className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-600">JD</div>
                        <span className="ml-2 text-gray-700">John Doe</span>
                    </div>
                </div>
            </header>

            {/* Tabs */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex space-x-8">
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'dashboard' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab('familyAnalysis')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'familyAnalysis' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Family Capital Analysis
                        </button>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {activeTab === 'dashboard' && (
                    <div className="space-y-6">
                        {/* Expense Distribution Chart */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Expense Distribution</h2>
                            <div className="flex justify-center">
                                <PieChart width={400} height={200}>
                                    <Pie
                                        data={expenseData}
                                        cx={200}
                                        cy={100}
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {expenseData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                                </PieChart>
                            </div>
                        </div>

                        {/* Savings & Investments */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Savings & Investments</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Fund</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">₹</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                            value="15000"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Joint Savings Account</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">₹</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                            value="20000"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Recurring Deposits / Mutual Funds</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">₹</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                            value="25000"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Gold or Property Investments</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">₹</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                            value="10000"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other Expenses */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Other Expenses</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">OTT Subscriptions</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">₹</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                            value="1500"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Legal Services</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">₹</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                            value="2000"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pet-Related Costs</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">₹</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                            value="3500"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final Calculations */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Final Calculations</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                    <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
                                    <p className="mt-1 text-2xl font-semibold text-indigo-600">₹ 135,800</p>
                                    <p className="mt-1 text-xs text-gray-500">Monthly expenditure across all categories</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="text-sm font-medium text-gray-500">Total Income</h3>
                                    <p className="mt-1 text-2xl font-semibold text-green-600">₹ 175,000</p>
                                    <p className="mt-1 text-xs text-gray-500">Combined monthly income from all sources</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="text-sm font-medium text-gray-500">Net Surplus</h3>
                                    <p className="mt-1 text-2xl font-semibold text-blue-600">₹ 39,200</p>
                                    <p className="mt-1 text-xs text-gray-500">Available for additional savings or investments</p>
                                </div>
                            </div>
                        </div>

                        {/* Long-Term Financial Goals */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-medium text-gray-900">Long-Term Financial Goals</h2>
                                <button
                                    onClick={() => setShowNewGoalForm(!showNewGoalForm)}
                                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                >
                                    <PlusCircle className="h-4 w-4 mr-1" /> Add Goal
                                </button>
                            </div>

                            {/* Children's Higher Education */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Children's Higher Education</h3>
                                        <p className="text-xs text-gray-500">Target: ₹ 25,00,000 by 2030</p>
                                    </div>
                                    <div className="text-sm text-gray-500">Progress: 35%</div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Monthly Contribution</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">₹</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                value="15000"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Current Savings</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">₹</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                value="875000"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Expected Return Rate</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                                                value="8"
                                                readOnly
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Retirement Fund */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Retirement Fund</h3>
                                        <p className="text-xs text-gray-500">Target: ₹ 1,50,00,000 by 2045</p>
                                    </div>
                                    <div className="text-sm text-gray-500">Progress: 22%</div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '22%' }}></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Monthly Contribution</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">₹</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                value="20000"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Current Savings</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">₹</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                value="3300000"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Expected Return Rate</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                                                value="9.5"
                                                readOnly
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Calculate & Save Button */}
                        <div className="flex justify-end">
                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Calculate & Save Analysis
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'familyAnalysis' && (
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-medium text-gray-900 mb-6">Joint Family Capital Need Analysis</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {/* Family 1 */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Family 1</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Enter full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="dd/mm/yyyy"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Enter profession"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">₹</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Children</label>
                                        <input
                                            type="number"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="0"
                                            min="0"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Planning for More Children</label>
                                        <div className="mt-1 space-x-4">
                                            <div className="inline-flex items-center">
                                                <input
                                                    id="planning-yes-1"
                                                    name="planning-1"
                                                    type="radio"
                                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                                />
                                                <label htmlFor="planning-yes-1" className="ml-2 block text-sm text-gray-700">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="inline-flex items-center">
                                                <input
                                                    id="planning-no-1"
                                                    name="planning-1"
                                                    type="radio"
                                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                                    defaultChecked
                                                />
                                                <label htmlFor="planning-no-1" className="ml-2 block text-sm text-gray-700">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Policy Available</label>
                                        <div className="mt-1 space-x-4">
                                            <div className="inline-flex items-center">
                                                <input
                                                    id="insurance-yes-1"
                                                    name="insurance-1"
                                                    type="radio"
                                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                                    defaultChecked
                                                />
                                                <label htmlFor="insurance-yes-1" className="ml-2 block text-sm text-gray-700">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="inline-flex items-center">
                                                <input
                                                    id="insurance-no-1"
                                                    name="insurance-1"
                                                    type="radio"
                                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                                />
                                                <label htmlFor="insurance-no-1" className="ml-2 block text-sm text-gray-700">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Family 2 */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Family 2</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Enter full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="dd/mm/yyyy"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
                                        <input
                                            type="text"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Enter profession"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">₹</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Children</label>
                                        <input
                                            type="number"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="0"
                                            min="0"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Planning for More Children</label>
                                        <div className="mt-1 space-x-4">
                                            <div className="inline-flex items-center">
                                                <input
                                                    id="planning-yes-2"
                                                    name="planning-2"
                                                    type="radio"
                                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                                />
                                                <label htmlFor="planning-yes-1" className="ml-2 block text-sm text-gray-700">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="inline-flex items-center">
                                                <input
                                                    id="planning-no-2"
                                                    name="planning-2"
                                                    type="radio"
                                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                                    defaultChecked
                                                />
                                                <label htmlFor="planning-no-2" className="ml-2 block text-sm text-gray-700">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Policy Available</label>
                                        <div className="mt-1 space-x-4">
                                            <div className="inline-flex items-center">
                                                <input
                                                    id="insurance-yes-2"
                                                    name="insurance-2"
                                                    type="radio"
                                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                                    defaultChecked
                                                />
                                                <label htmlFor="insurance-yes-2" className="ml-2 block text-sm text-gray-700">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="inline-flex items-center">
                                                <input
                                                    id="insurance-no-2"
                                                    name="insurance-2"
                                                    type="radio"
                                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                                />
                                                <label htmlFor="insurance-no-2" className="ml-2 block text-sm text-gray-700">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                )} 
            </main> 
        </div>
    )}