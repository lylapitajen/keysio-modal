"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;
