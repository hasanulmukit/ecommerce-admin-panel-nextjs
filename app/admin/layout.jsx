// app/admin/layout.jsx
import AdminSidebar from "../../components/AdminSidebar";
import "../../app/globals.css";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-white dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}
