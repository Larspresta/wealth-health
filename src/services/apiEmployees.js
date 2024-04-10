import supabase from "./supabase";

export async function getEmployees() {
  let { data, error } = await supabase.from("employees").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not get employees");
  }
  return data;
}

export async function createEmployee() {
  const { data, error } = await supabase
    .from("employees")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could not create an employee");
  }
  return data;
}
