import React, { useState } from "react";
import { useDashboard } from "../context/DashboardContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

// Example: modify or augment these arrays based on real categories/widgets structure
const widgetTabs = [
  {
    key: "CSPM",
    label: "CSPM",
    widgets: [
      { id: "cspm-w1", name: "Widget 1" },
      { id: "cspm-w2", name: "Widget 2" }
    ]
  },
  {
    key: "CWPP",
    label: "CWPP",
    widgets: [
      { id: "cwpp-w1", name: "Widget A" },
      { id: "cwpp-w2", name: "Widget B" }
    ]
  },
  {
    key: "Image",
    label: "Image",
    widgets: [
      { id: "img-w1", name: "Widget Img 1" }
    ]
  },
  {
    key: "Ticket",
    label: "Ticket",
    widgets: [
      { id: "ticket-w1", name: "Widget Tkt 1" }
    ]
  }
];

export default function AddWidgetModal({ show, handleClose, categoryId }) {
  const { dispatch } = useDashboard();

  const [tab, setTab] = useState(widgetTabs[0].key);
  const [selected, setSelected] = useState({});

  const widgets = widgetTabs.find(t => t.key === tab)?.widgets || [];

  const toggleWidget = (id) => {
    setSelected(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleConfirm = () => {
    widgets
      .filter(w => selected[w.id])
      .forEach(widget => {
        dispatch({
          type: "ADD_WIDGET",
          payload: {
            categoryId,
            widget: {
              id: widget.id,
              name: widget.name,
              text: `Description for ${widget.name}`
            }
          }
        });
      });

    setSelected({});
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="p-0">
      <div style={{background: "#181b54", borderRadius: '1.5rem 1.5rem 0 0', padding: "1.1rem 1.8rem"}}>
        <span style={{color:'#fff', fontWeight:700, fontSize:18}}>Add Widget</span>
        <button
          aria-label="Close"
          onClick={handleClose}
          style={{
            background: 'none', border: 'none', float: 'right', color: '#fff', fontSize: 26, cursor: 'pointer'
          }}
        >×</button>
      </div>
      <Modal.Body className="py-4 px-3 px-md-5">
        <div style={{marginBottom: '1.35rem', fontSize:15, color:'#444'}}>
          Personalise your dashboard by adding the following widget
        </div>
        <Nav variant="tabs" activeKey={tab}
             onSelect={(k) => setTab(k)} style={{marginBottom: '1.6rem', fontWeight:600}}>
          {widgetTabs.map(t =>
            <Nav.Item key={t.key}>
              <Nav.Link eventKey={t.key} style={{fontWeight:600}}>{t.label}</Nav.Link>
            </Nav.Item>
          )}
        </Nav>
        {widgets.map(w =>
          <Form.Check
            key={w.id}
            type="checkbox"
            id={w.id}
            label={
              <span style={{color:"#d52a61", fontWeight:600, fontSize:16}}>
                {w.name}
              </span>
            }
            checked={!!selected[w.id]}
            onChange={() => toggleWidget(w.id)}
            className="mb-3"
            style={{fontSize:16, paddingLeft: 8}}
          />
        )}
      </Modal.Body>
      <Modal.Footer className="justify-content-end" style={{borderTop:"none"}}>
        <Button variant="outline-secondary" onClick={handleClose} style={{borderRadius:"0.4rem"}}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleConfirm}
          style={{background:"#181b54", borderRadius:"0.4rem", marginLeft: 10}}
          disabled={
            widgets.filter(w => selected[w.id]).length === 0
          }
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}