// app/layout.jsx
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>E-Commerce Admin Panel</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
