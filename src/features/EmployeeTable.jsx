import { useQuery } from "@tanstack/react-query";
import { useMemo, useCallback, useRef } from "react";
import { getEmployees } from "../services/apiEmployees";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

function EmployeeList() {
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption("quickFilterText", document.getElementById("filter-text-box").value);
  }, []);

  const {
    isLoading,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  const colDefs = [
    { field: "id", minWidth: 70, maxWidth: 90 },
    { field: "FirstName", width: 150 },
    { field: "LastName", width: 150 },
    { field: "dob", width: 150 },
    { field: "StartDate", width: 150 },
    { field: "Department", width: 150 },
    { field: "Street", width: 150 },
    { field: "State", width: 150 },
    { field: "ZipCode", width: 100 },
  ];

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>An error occurred: {error.message}</h2>;

  return (
    <div style={containerStyle}>
      <div className="mx-auto max-w-[1300px] w-full p-4">
        <div className="text-xl py-3">
          <label htmlFor="filter-text-box">Search:</label>
          <input
            className="border-2 mx-2"
            type="text"
            id="filter-text-box"
            placeholder=""
            onInput={onFilterTextBoxChanged}
          />
        </div>
        <div className="ag-theme-quartz" style={{ height: 800 }}>
          <AgGridReact
            rowData={employees}
            columnDefs={colDefs}
            ref={gridRef}
            paginationAutoPageSize={true}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
