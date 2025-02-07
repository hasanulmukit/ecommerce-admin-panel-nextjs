# E-Commerce Admin Panel

The **E-Commerce Admin Panel** is a modern, responsive, and feature-rich administration dashboard designed to help e-commerce businesses manage orders, products, and users efficiently. Built with Next.js (using the App Router) and styled with Tailwind CSS, this admin panel offers a clean, intuitive interface along with advanced features such as real‑time search, filtering, pagination, interactive analytics charts, audit logging, and more.

---


## Features

- **Dashboard Overview:**  
  - Display key performance indicators (KPIs) such as total orders, products, and users.  
  - Interactive sales or focus charts using Chart.js.

- **Orders Management:**  
  - View and update order statuses via dropdown menus.
  - Process refunds and track order history.
  - Audit logging of order management actions.

- **Products Management:**  
  - List products with details including ID, name, price, and stock.
  - Search, filter, and paginate product listings.
  - Add, edit, and delete products.

- **Users Management:**  
  - Manage user accounts with details like user ID, name, email, and role.
  - Delete users and view user activity.

- **Audit Logging & Activity Tracking:**  
  - Track changes and actions (e.g., order updates, product modifications, user deletions).
  - View audit logs in a dedicated section.
  - Export audit logs as JSON for compliance and reporting.

- **Advanced UI/UX Enhancements:**  
  - Responsive design using Tailwind CSS’s responsive utilities.
  - Modern aesthetic with a clean, flat design, ample whitespace, and subtle animations.
  - Dark/Light mode toggle for improved readability in different environments.
  - Smooth transitions and hover effects for a polished user experience.

---

## Technologies Used

- **Next.js (App Router):**  
  Utilizes the latest Next.js features for routing, server-side rendering, and performance optimizations.

- **React:**  
  Built with React functional components and hooks for a modern, maintainable codebase.

- **Tailwind CSS:**  
  A utility-first CSS framework used to rapidly build a responsive and modern UI.

- **Chart.js:**  
  For rendering interactive charts and visualizing sales or focus data.

- **React Icons:**  
  For including modern iconography throughout the dashboard.

- **Local Storage:**  
  Used for persisting data such as tasks, pomodoro sessions, and audit logs during development (to be replaced with a backend API for production).

---

## Installation

### Prerequisites

- Node.js (v16 or later)
- npm or Yarn
- VS Code or another code editor

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ecom-admin.git
   cd ecom-admin
   ```
2. Install dependencies:

- Using npm:

  ```bash
  npm install
  ```
- Or using Yarn:

  ```bash
  yarn install
  ```

3. Set up Tailwind CSS:

- (Tailwind is already installed and configured as part of the project setup. Review tailwind.config.js and app/globals.css if needed.)

4. Run the development server:

  ```bash
  npm run dev
  ```
- Open http://localhost:3000 in your browser.

### Usage
- Dashboard:
On logging in, admins are redirected to the dashboard, which displays KPIs and interactive charts. Use this overview to get quick insights into orders, products, and user metrics.

- Orders Management:
Navigate to the Orders page (e.g., /admin/orders) to view, update, and process orders. Use the dropdown menus to update order statuses and process refunds.

- Products Management:
Access the Products page (/admin/products) to manage your product listings. Utilize the search, filtering, and pagination features to efficiently manage a large catalog.

- Users Management:
Use the Users page (/admin/users) to manage user accounts. Delete or modify user details as necessary.

- Audit Logs:
All admin actions (order updates, product edits, user deletions) are logged in the Audit Logs section. Audit logs can be exported as JSON for compliance and reporting.

- Dark/Light Mode:
Toggle dark mode using the provided button in the header to switch between themes based on your environment.

- Responsive Design:
The admin panel is fully responsive and optimized for various screen sizes, from mobile devices to desktop monitors.
