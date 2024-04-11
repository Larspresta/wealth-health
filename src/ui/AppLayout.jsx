import CreateEmployee from "../features/CreateEmployee";
import EmployeeList from "../features/EmployeeTable";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <CreateEmployee />
      <EmployeeList />
    </div>
  );
}

export default AppLayout;
