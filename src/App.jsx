import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <Container fluid className="px-2 px-md-4 py-3">
      <TopBar />
      <h2 className="mb-3 ps-2">CNAPP Dashboard</h2>
      <SearchBar />
      <Dashboard />
    </Container>
  );
}

function TopBar() {
  const [activeBtn, setActiveBtn] = useState(null);

  return (
    <div className="topbar-custom mb-4">
      <span className="breadcrumbs">Home &gt; <span style={{color:"#333"}}>Dashboard V2</span></span>
      <input
        className="form-control topbar-search"
        placeholder="Search anything..."
        aria-label="Search anything"
        type="search"
      />
      <div className="topbar-actions">
        <button className={activeBtn===1 ? 'active' : ''} onClick={() => setActiveBtn(1)}>Add Widget +</button>
        <button className={activeBtn===2 ? 'active' : ''} onClick={() => setActiveBtn(2)}>⟳</button>
        <button className={activeBtn===3 ? 'active':''} onClick={() => setActiveBtn(3)}>⋮</button>
        <button className={activeBtn===4 ? 'active' : ''} onClick={() => setActiveBtn(4)}>Last 2 days ▼</button>
      </div>
    </div>
  );
}