/**
 * The code defines a React context and provider for managing dashboard data with functions to
 * add/remove widgets and set search criteria.
 * '@returns' The code snippet defines a React context called `DashboardContext` and provides a
 * `DashboardProvider` component that uses `useReducer` to manage state using the `dashboardReducer`
 * function. The initial state is defined in `initialData`. The `DashboardProvider` component wraps its
 * children with the `DashboardContext.Provider`, passing down the state and dispatch function obtained
 * from `useReducer`. Additionally, there is
 */
import React, { createContext, useReducer, useContext } from "react";

const initialData = {
  categories: [
	{
	  id: "cspm",
	  name: "CSPM Executive Dashboard",
	  widgets: [
		{ id: "w1", name: "Vuln Count", text: "1470 Total Vulnerabilities" },
	  ],
	},
	{
	  id: "cloud",
	  name: "Cloud Accounts",
	  widgets: [
		{ id: "w2", name: "Accounts", text: "Total: 2 | Connected: 2" },
	  ],
	},
  ],
  search: "",
};

function dashboardReducer(state, action) {
  switch (action.type) {
	case "ADD_WIDGET": {
	  const { categoryId, widget } = action.payload;
	  return {
		...state,
		categories: state.categories.map((cat) =>
		  cat.id === categoryId
			? { ...cat, widgets: [...cat.widgets, widget] }
			: cat
		),
	  };
	}
	case "REMOVE_WIDGET": {
	  const { categoryId, widgetId } = action.payload;
	  return {
		...state,
		categories: state.categories.map((cat) =>
		  cat.id === categoryId
			? {
				...cat,
				widgets: cat.widgets.filter((w) => w.id !== widgetId),
			  }
			: cat
		),
	  };
	}
	case "SET_SEARCH": {
	  return { ...state, search: action.payload };
	}
	default:
	  return state;
  }
}

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialData);

  return (
	<DashboardContext.Provider value={{ state, dispatch }}>
	  {children}
	</DashboardContext.Provider>
  );
}
export function useDashboard() {
  return useContext(DashboardContext);
}
