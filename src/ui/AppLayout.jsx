import EmployeeList from "../features/EmployeeTable";
import Form from "./Form";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <Form />
      <EmployeeList />
    </div>
  );
}

export default AppLayout;
