import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmployee } from "../services/apiEmployees";

function CreateEmployee() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      alert("new Employee created");
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      reset();
    },
    onError: (err) => alert(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className="container mx-auto max-w-[1300px]">
      <form className="border-b-2 border-gray-100 pb-4" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex justify-evenly ">
          <div className="flex flex-col p-3">
            <label htmlFor="FirstName">First Name</label>
            <input
              className="border-2 p-1"
              type="text"
              id="FirstName"
              disabled={isCreating}
              {...register("FirstName", { required: "this field is required", maxLength: 20, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.FirstName && <p className="text-red-700">{errors?.FirstName?.message}</p>}

            <label htmlFor="LastName">Last Name</label>
            <input
              className="border-2 p-1"
              type="text"
              id="LastName"
              disabled={isCreating}
              {...register("LastName", { required: "this field is required", maxLength: 20, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.LastName && <p className="text-red-700">{errors?.LastName?.message}</p>}
          </div>

          <div className="flex flex-col p-3">
            <label htmlFor="StartDate">Start Date</label>
            <input
              className="border-2 p-1"
              type="datetime-local"
              id="StartDate"
              disabled={isCreating}
              {...register("StartDate", { required: "Fill in your start date" })}
            />
            {errors.StartDate && <p className="text-red-700">{errors?.StartDate?.message}</p>}

            <label htmlFor="Department">Department</label>
            <select className="border-2 p-1" id="Department" {...register("Department")}>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="humanResources">Human resources</option>
              <option value="engineering">Engineering</option>
              <option value="legal">Legal</option>
            </select>
          </div>

          <div className="flex flex-col p-3">
            <label htmlFor="dob">Date of Birth</label>
            <input
              className="border-2 p-1"
              type="datetime-local"
              id="dob"
              {...register("dob", { required: "Fill in your date of Birth" })}
            />
            {errors.dob && <p className="text-red-700">{errors?.dob?.message}</p>}
          </div>

          <div className="flex flex-col p-3">
            <label htmlFor="Street">Street</label>
            <input
              className="border-2 p-1"
              type="text"
              id="Street"
              {...register("Street", { required: "Fill in your street" })}
            />
            {errors.Street && <p className="text-red-700">{errors?.Street?.message}</p>}

            <label htmlFor="City">City</label>
            <input
              className="border-2 p-1"
              type="text"
              id="City"
              {...register("City", { required: "Fill in your City" })}
            />
            {errors.City && <p className="text-red-700">{errors?.City?.message}</p>}
          </div>

          <div className="flex flex-col p-3">
            <label htmlFor="State">State</label>
            <select className="border-2 p-1" id="State" {...register("State")}>
              <option value="AL">Alabama</option>
              <option value="FL">Florida</option>
              <option value="CO">Colorade</option>
            </select>

            <label htmlFor="ZipCode">Zip Code</label>
            <input
              className="border-2 p-1"
              type="number"
              id="ZipCode"
              {...register("ZipCode", { required: "This field is required" })}
            />
            {errors.ZipCode && <p className="text-red-700">{errors?.ZipCode?.message}</p>}
          </div>
        </div>
        <input
          className="mx-auto block bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          type="submit"
          disabled={isCreating}
        />
      </form>
    </div>
  );
}

export default CreateEmployee;
