import React from "react";
import { useDashboard } from "../context/DashboardContext";
import CategorySection from "./CategorySection";
import Alert from "react-bootstrap/Alert";

export default function Dashboard() {
  const { state } = useDashboard();

  const filteredCategories = state.categories
    .map(cat => {
      if (!state.search) return cat;
      const filteredWidgets = cat.widgets.filter(w =>
        w.name.toLowerCase().includes(state.search.toLowerCase()) ||
        w.text.toLowerCase().includes(state.search.toLowerCase())
      );
      return { ...cat, widgets: filteredWidgets };
    })
    .filter(cat => !state.search || cat.widgets.length > 0);

  if (!filteredCategories.length) {
    return <Alert variant="warning">No widgets found.</Alert>;
  }

  return (
    <>
      {filteredCategories.map(cat => (
        <section key={cat.id} className="dashboard-section mb-5">
          <h3 className="dashboard-section-title">{cat.name}:</h3>
          <CategorySection category={cat} />
        </section>
      ))}
    </>
  );
}