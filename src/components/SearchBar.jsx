import React from "react";
import { useDashboard } from "../context/DashboardContext";
import Form from "react-bootstrap/Form";

export default function SearchBar() {
  const { state, dispatch } = useDashboard();
  return (
    <Form className="mb-4">
      <Form.Control
        type="text"
        placeholder="Search all widgets..."
        value={state.search}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />
    </Form>
  );
}
