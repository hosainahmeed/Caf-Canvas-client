import { useForm } from "react-hook-form";
import bg from "../assets/images/more/11.png";
import useAxiosPublic from "./Hook/useAxiosPublic";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
function UpdateCoffe() {
  const location = useLocation();
  const coffeeData = location.state;

  const { _id, Category, Chef, Details, Name, Photo, Supplier, Taste, Price } =
    coffeeData;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    console.log("Update Data:", data);
    axiosPublic.put(`/coffee/${_id}`, data).then((result) => {
      const { modifiedCount } = result.data;
      if (modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "coffee updated.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-1/2 text-center mt-12">
        <h1 className="text-4xl">Update Existing Coffee Details</h1>
        <p className="text-2xl">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form
        className="md:grid grid-cols-2 gap-4 p-4 my-12 bg-[#F4F3F0] w-3/4 rounded shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="text-2xl">Name</label>
          <input
            label="Name"
            defaultValue={Name}
            {...register("Name", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div>
          <label className="text-2xl">Chef</label>
          <input
            label="Chef"
            defaultValue={Chef}
            {...register("Chef", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Chef && (
            <span className="text-red-600">Chef is required</span>
          )}
        </div>
        <div>
          <label className="text-2xl">Supplier</label>
          <input
            label="Supplier"
            defaultValue={Supplier}
            {...register("Supplier", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Supplier && (
            <span className="text-red-600">Supplier is required</span>
          )}
        </div>
        <div>
          <label className="text-2xl">Taste</label>
          <input
            label="Taste"
            defaultValue={Taste}
            {...register("Taste", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Taste && (
            <span className="text-red-600">Taste is required</span>
          )}
        </div>
        <div>
          <label className="text-2xl">Category</label>
          <input
            label="Category"
            defaultValue={Category}
            {...register("Category", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Category && (
            <span className="text-red-600">Category is required</span>
          )}
        </div>
        <div>
          <label className="text-2xl">Price</label>
          <input
            label="Category"
            defaultValue={Price}
            {...register("Price", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Price && (
            <span className="text-red-600">Price is required</span>
          )}
        </div>
        <div>
          <label className="text-2xl">Details</label>
          <input
            label="Details"
            defaultValue={Details}
            {...register("Details", { required: true })}
            className="border rounded p-2 text-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Details && (
            <span className="text-red-600">Details are required</span>
          )}
        </div>
        <div>
          <label className="text-2xl">Photo</label>
          <input
            label="Photo"
            defaultValue={Photo}
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
          value="Update Coffee Details"
        />
      </form>
    </div>
  );
}

export default UpdateCoffe;
