// app/admin/users/page.jsx
"use client";
import React, { useState } from "react";
import UsersTable from "../../../components/UsersTable";

export default function UsersPage() {
  // Dummy users data.
  const [users, setUsers] = useState([
    { id: "U001", name: "Alice Johnson", email: "alice@example.com", role: "Customer" },
    { id: "U002", name: "Bob Smith", email: "bob@example.com", role: "Customer" },
    { id: "U003", name: "Admin User", email: "admin@example.com", role: "Admin" },
  ]);

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Manage Users</h1>
      <UsersTable users={users} onDelete={handleDelete} />
    </div>
  );
}
