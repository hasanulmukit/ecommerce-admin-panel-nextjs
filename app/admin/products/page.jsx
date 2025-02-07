// app/admin/products/page.jsx
"use client";
import React, { useState } from "react";

const dummyProducts = [
  { id: "P001", name: "Product One", price: "29.99", stock: 50 },
  { id: "P002", name: "Product Two", price: "49.99", stock: 20 },
  { id: "P003", name: "Product Three", price: "19.99", stock: 100 },
  // ... more dummy products
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const filteredProducts = dummyProducts.filter(
    (prod) =>
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Manage Products</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        />
      </div>
      <button className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Add New Product
      </button>
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
            {displayedProducts.map((prod) => (
              <tr key={prod.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{prod.id}</td>
                <td className="px-4 py-2">{prod.name}</td>
                <td className="px-4 py-2">${prod.price}</td>
                <td className="px-4 py-2">{prod.stock}</td>
                <td className="px-4 py-2 space-x-2">
                  <button onClick={() => alert("Edit " + prod.name)} className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
                  <button onClick={() => alert("Delete " + prod.id)} className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-3 py-1">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
