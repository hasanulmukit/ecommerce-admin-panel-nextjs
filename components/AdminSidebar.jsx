// components/AdminSidebar.jsx
"use client";
import Link from "next/link";
import React from "react";

export default function AdminSidebar() {
  return (
    <aside className="w-full sm:w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <ul>
          <li>
  <Link
    href="/admin/dashboard"
    className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    Dashboard
  </Link>
</li>
<li>
  <Link
    href="/admin/orders"
    className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    Orders
  </Link>
</li>
<li>
  <Link
    href="/admin/products"
    className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    Products
  </Link>
</li>
<li>
  <Link
    href="/admin/users"
    className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    Users
  </Link>
</li>

          </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
