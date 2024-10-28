import { useForm } from "react-hook-form";
import bg from "../assets/images/more/11.png";
import useAxiosPublic from "./Hook/useAxiosPublic";
// Removed dynamic formInfo and added static inputs
function AddCoffee() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    // console.log("Submitted Data:", data);
    axiosPublic.post("/coffee", data).then((result) => {
      console.log(result.data);
    });
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-1/2 text-center mt-12">
        <h1 className="text-4xl">Add New Coffee</h1>
        <p className="text-2xl">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form
        className="md:grid grid-cols-2 gap-4 p-4 my-12 bg-[#F4F3F0] rounded shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            label="Name"
            placeholder="Enter coffee name"
            {...register("Name", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div>
          <input
            label="Chef"
            placeholder="Enter chef name"
            {...register("Chef", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Chef && (
            <span className="text-red-600">Chef is required</span>
          )}
        </div>
        <div>
          <input
            label="Supplier"
            placeholder="Enter supplier name"
            {...register("Supplier", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Supplier && (
            <span className="text-red-600">Supplier is required</span>
          )}
        </div>
        <div>
          <input
            label="Taste"
            placeholder="Enter taste description"
            {...register("Taste", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Taste && (
            <span className="text-red-600">Taste is required</span>
          )}
        </div>
        <div>
          <input
            label="Category"
            placeholder="Enter category"
            {...register("Category", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Category && (
            <span className="text-red-600">Category is required</span>
          )}
        </div>
        <div>
          <input
            label="Details"
            placeholder="Enter details"
            {...register("Details", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Details && (
            <span className="text-red-600">Details are required</span>
          )}
        </div>
        <div>
          <input
            label="Photo"
            placeholder="Enter photo URL"
            {...register("Photo", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Photo && (
            <span className="text-red-600">Photo is required</span>
          )}
        </div>
        <input
          type="submit"
          className="btn bg-[#D2B48C] col-span-2 mt-4"
          value="Add Coffee"
        />{" "}
        {/* Fixed typo in value */}
      </form>
    </div>
  );
}

export default AddCoffee;
