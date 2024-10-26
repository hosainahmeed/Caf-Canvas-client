import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "./Hook/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";

function CoffeeCard({ coffee }) {
  const {
    _id,
    Category,
    Chef,
    Details,
    refetch,
    Name,
    Photo,
    Supplier,
    Taste,
    Price,
  } = coffee;
  const axiosPublic = useAxiosPublic();

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    async (id) => {
      const result = await axiosPublic.delete(`/coffee/${id}`);
      return result.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("coffees");
        Swal.fire({
          title: "Deleted!",
          text: "Your Coffee has been deleted.",
          icon: "success",
        });
      },
      onError: (error) => {
        if (error.response && error.response.status === 404) {
          Swal.fire({
            title: "Error!",
            text: "Coffee not found. It may have been already deleted.",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the coffee.",
            icon: "error",
          });
        }
      },
    }
  );

  const coffeeDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
        refetch();
      }
    });
  };
  const navigate = useNavigate();

  const updateDataHandle = (coffee) => {
    navigate("/updatecoffee", { state: coffee });
  };

  return (
    <div className="w-full sm:w-80 lg:w-[20rem] bg-base-100 shadow-xl flex flex-col p-4 rounded-lg">
      <figure className="h-48 md:h-56 lg:h-60">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={Photo}
          alt={`${Name} image`}
        />
      </figure>
      <div className="w-full flex flex-col justify-between p-4 flex-grow">
        <div>
          <h2 className="card-title text-lg font-bold text-gray-800">
            Name: {Name}
          </h2>
          <p className="text-gray-600">Chef: {Chef}</p>
          <p className="text-gray-600">Price: ${Price}</p>
          <p className="text-gray-600">Supplier: {Supplier}</p>
        </div>
        <div className="flex md:flex-row flex-col gap-2 justify-end mt-4">
          <button className="btn btn-active w-full sm:w-auto">View</button>
          <button
            onClick={() => updateDataHandle(coffee)}
            className="btn btn-primary w-full sm:w-auto"
          >
            Edit
          </button>
          <button
            onClick={() => coffeeDelete(_id)}
            className="btn btn-secondary w-full sm:w-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
