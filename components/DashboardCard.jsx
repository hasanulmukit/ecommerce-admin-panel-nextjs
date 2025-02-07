// components/DashboardCard.jsx
"use client";
import React from "react";

export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
      {icon && <div className="text-3xl text-primary">{icon}</div>}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
      </div>
    </div>
  );
}
