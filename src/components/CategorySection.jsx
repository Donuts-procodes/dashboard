import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";

export default function CategorySection({ category }) {
  const [showAdd, setShowAdd] = useState(false);

  // Make sure each section has exactly 3 columns
  const widgets = [...category.widgets];
  while (widgets.length < 3) widgets.push(null);

  return (
    <>
      <Row className="g-4">
        {widgets.map((widget, idx) => 
          widget ? (
            <Col key={widget.id} xs={12} md={4}>
              <Widget categoryId={category.id} widget={widget} />
            </Col>
          ) : (
            <Col key={"empty" + idx} xs={12} md={4}>
              {idx === widgets.findIndex(w=>!w) ? (
                <AddWidgetButton onClick={() => setShowAdd(true)} />
              ) : (
                <EmptyWidgetPlaceholder />
              )}
            </Col>
          )
        )}
      </Row>
      <AddWidgetModal show={showAdd} handleClose={() => setShowAdd(false)} categoryId={category.id} />
    </>
  );
}

function EmptyWidgetPlaceholder() {
  return (
    <div className="dashboard-card widget-placeholder">
      <svg fill="#c0c4cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
        <path d="M3 13h8v8H3zm10-10h8v8h-8zM3 3h8v8H3zm10 10h8v8h-8z"></path>
      </svg>
      No Graph data available!
    </div>
  );
}

function AddWidgetButton({ onClick }) {
  return (
    <div className="add-widget-btn" onClick={onClick} role="button" tabIndex={0} onKeyDown={e=>e.key==="Enter"&&onClick()}>
      + Add Widget
    </div>
  );
}