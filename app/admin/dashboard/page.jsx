// app/admin/dashboard/page.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaBoxOpen, FaUsers } from "react-icons/fa";
import Chart from "chart.js/auto";

// Dummy data for demonstration – replace these with your API calls as needed.
const dummyDashboard = { orders: 120, products: 45, users: 85 };
const salesData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [1000, 1500, 800, 2000, 1700, 2200],
      borderColor: "#1E3A8A",
      backgroundColor: "rgba(30,58,138,0.1)",
      tension: 0.3,
    },
  ],
};

export default function DashboardPage() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // For export/import demonstration, we'll use dummy data.
  const [exportData, setExportData] = useState({
    dashboard: dummyDashboard,
    sales: salesData,
  });

  // Initialize (or reinitialize) the chart.
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: salesData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
    // Cleanup on unmount.
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  // Export data as JSON
  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dashboard_data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export data as CSV (basic implementation)
  const handleExportCSV = () => {
    // Example: export sales data as CSV
    const headers = salesData.labels.join(",");
    const values = salesData.datasets[0].data.join(",");
    const csvContent = `${headers}\n${values}`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sales_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Simulated import handler – expects a JSON file
  const handleImportData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        // Update your state or send to your API as needed.
        setExportData(importedData);
        alert("Data imported successfully!");
      } catch (error) {
        alert("Failed to import data. Please check the file format.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Admin Dashboard</h1>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaShoppingCart className="text-3xl text-primary" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Total Orders</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{dummyDashboard.orders}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaBoxOpen className="text-3xl text-primary" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Total Products</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{dummyDashboard.products}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaUsers className="text-3xl text-primary" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Total Users</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{dummyDashboard.users}</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-64 mb-8">
        <canvas ref={chartRef}></canvas>
      </div>

      {/* Export/Import Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Data Export & Import</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={handleExportJSON} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Export JSON
          </button>
          <button onClick={handleExportCSV} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Export CSV
          </button>
          <label className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer">
            <span>Import Data</span>
            <input type="file" accept=".json" onChange={handleImportData} className="hidden" />
          </label>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          * The export functions download dummy dashboard and sales data. Replace these with your actual data in production.
        </p>
      </div>
    </div>
  );
}
