// components/ProductsTable.jsx
"use client";
import React from "react";

export default function ProductsTable({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left">Product ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Stock</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{prod.id}</td>
              <td className="px-4 py-2">{prod.name}</td>
              <td className="px-4 py-2">${prod.price}</td>
              <td className="px-4 py-2">{prod.stock}</td>
              <td className="px-4 py-2 space-x-2">
                <button onClick={() => onEdit(prod)} className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
                <button onClick={() => onDelete(prod.id)} className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
