// app/admin/orders/page.jsx
"use client";
import React, { useState } from "react";

// Dummy orders data with initial history (replace with API calls as needed)
const initialOrders = [
  {
    id: "1001",
    customer: "John Doe",
    total: "150.00",
    status: "Processing",
    date: "2023-03-10",
    history: [
      { timestamp: "2023-03-10T09:00:00Z", action: "Order Created" },
    ],
  },
  {
    id: "1002",
    customer: "Jane Smith",
    total: "85.50",
    status: "Processing",
    date: "2023-03-11",
    history: [
      { timestamp: "2023-03-11T10:30:00Z", action: "Order Created" },
    ],
  },
];

// Available status options for orders.
const statusOptions = ["Processing", "Shipped", "Delivered", "Refunded"];

export default function OrdersPage() {
  // State for orders and audit logs.
  const [orders, setOrders] = useState(initialOrders);
  const [auditLogs, setAuditLogs] = useState([]); // Each log: { timestamp, orderId, action, details }

  // Handler to update order status.
  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === orderId) {
          const oldStatus = order.status;
          // Update order status.
          const updatedOrder = { ...order, status: newStatus };
          // Append to order history.
          const timestamp = new Date().toISOString();
          updatedOrder.history = [
            ...order.history,
            { timestamp, action: `Status updated from ${oldStatus} to ${newStatus}` },
          ];
          // Record audit log.
          addAuditLog(orderId, `Status Update`, `Changed status from ${oldStatus} to ${newStatus}`);
          return updatedOrder;
        }
        return order;
      })
    );
  };

  // Handler for processing a refund.
  const handleProcessRefund = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === orderId) {
          // Update order status to "Refunded" if not already.
          if (order.status !== "Refunded") {
            const timestamp = new Date().toISOString();
            const updatedOrder = { ...order, status: "Refunded" };
            updatedOrder.history = [
              ...order.history,
              { timestamp, action: "Refund processed" },
            ];
            addAuditLog(orderId, "Refund Processed", "Order refunded");
            return updatedOrder;
          }
        }
        return order;
      })
    );
  };

  // Function to add an audit log entry.
  const addAuditLog = (orderId, action, details) => {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, orderId, action, details };
    setAuditLogs((prev) => [logEntry, ...prev]);
  };

  // Export audit logs as JSON.
  const handleExportAuditLogs = () => {
    const blob = new Blob([JSON.stringify(auditLogs, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "audit_logs.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Manage Orders</h1>

      {/* Orders Table with Enhanced Order Management */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">${order.total}</td>
                <td className="px-4 py-2">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="p-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleProcessRefund(order.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Process Refund
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Audit Logs Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Audit Logs</h2>
        {auditLogs.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No audit logs available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left">Timestamp</th>
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2 text-left">Action</th>
                  <th className="px-4 py-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log, index) => (
                  <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">{new Date(log.timestamp).toLocaleString()}</td>
                    <td className="px-4 py-2">{log.orderId}</td>
                    <td className="px-4 py-2">{log.action}</td>
                    <td className="px-4 py-2">{log.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleExportAuditLogs}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Export Audit Logs
          </button>
        </div>
      </div>
    </div>
  );
}
