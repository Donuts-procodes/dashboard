import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDashboard } from "../context/DashboardContext";

export default function Widget({ categoryId, widget }) {
  const { dispatch } = useDashboard();
  const isChart = widget && widget.chartType;

  // Optionally render a demo chart (circle or bar) in card
  return (
    <Card className="dashboard-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title as="div" className="mb-0" style={{fontSize:"1.06rem"}}>{widget.name}</Card.Title>
          <Button variant="danger" size="sm" onClick={()=>
            dispatch({ type: "REMOVE_WIDGET", payload: { categoryId, widgetId: widget.id } })}>
            &times;
          </Button>
        </div>
        {/* Basic SVG donut or bar demo as a fallback */}
        {isChart && widget.chartType === "donut" && (
          <DemoDonutChart />
        )}
        {isChart && widget.chartType === "bar" && (
          <DemoBarChart />
        )}
        <Card.Text>{widget.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function DemoDonutChart() {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" style={{margin:"0 auto 8px",display:"block"}}>
      <circle cx="27" cy="27" r="24" stroke="#dfdfef" strokeWidth="6" fill="none"/>
      <circle cx="27" cy="27" r="24" stroke="#5d6dff" strokeWidth="6" fill="none" strokeDasharray="44 96" transform="rotate(-90 27 27)" />
      <text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="14" fill="#333">2</text>
    </svg>
  );
}

function DemoBarChart() {
  return (
    <svg width="100%" height="18" viewBox="0 0 120 18" style={{margin:"0 0 8px 0"}}>
      <rect x="0" y="3" width="110" height="12" rx="6" fill="#dfdfef"/>
      <rect x="0" y="3" width="70" height="12" rx="6" fill="#fbc02d"/>
      <rect x="0" y="3" width="30" height="12" rx="6" fill="#d32f2f"/>
    </svg>
  );
}