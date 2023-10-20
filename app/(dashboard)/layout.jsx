import React from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Helpdesk | Tickets",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
