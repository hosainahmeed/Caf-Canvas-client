import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/Hook/useAxiosPublic";
import { Avatar, Button, Skeleton } from "antd";
import SectionHeader from "../../Components/utils/sectionHeader";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import useAuth from "../../Components/Hook/useAuth";

function Order() {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  // Ensure user is defined before using it
  const userEmail = user?.email;

  // Fetching cart data
  const {
    data: cartsData = [],
    isLoading,
    // isError,
    refetch,
  } = useQuery({
    queryKey: ["carts", userEmail],
    enabled: !!userEmail,
    queryFn: async () => {
      const result = await axiosPublic.get(`/carts/${userEmail}`, {
        withCredentials: true,
      });
      return result.data;
    },
  });

  // Delete item mutation
  const deleteItem = useMutation(
    async (id) =>
      await axiosPublic.delete(`/carts/${id}`, { withCredentials: true }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts"]);
      },
    }
  );

  const handleDelete = (id) => {
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
        deleteItem.mutate(id, {
          onSuccess: () => {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
            refetch();
          },
        });
      }
    });
  };

  // Handling loading and error states
  if (isLoading) {
    return <Skeleton active />;
  }

  // if (isError) {
  //   return (
  //     <div className="flex items-center justify-center h-[70vh]">
  //       <p className="text-3xl font-ranch font-black">Error fetching cart data!</p>
  //     </div>
  //   );
  // }

  const totalQuantity = cartsData.length;
  const totalPrice = cartsData.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  if (cartsData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-3xl font-ranch font-black">Nothing ordered yet</p>
        <br />
        <NavLink to={"/menu"}>
          <button className="btn ml-4">Order now</button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto sm:px-4 px-2 py-6">
      <SectionHeader head={"Order"} />

      {/* Order summary and payment button */}
      <div className="flex justify-between md:flex-row flex-col gap-2 md:items-center mb-6 p-4 bg-white shadow rounded-lg">
        <div>
          <p className="text-xl font-semibold">Total Items: {totalQuantity}</p>
          <p className="text-xl font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
        </div>
        <Button
          type="primary"
          size="large"
          className="bg-blue-500 hover:bg-blue-700 text-white"
          onClick={() =>
            Swal.fire(
              "Proceed to Payment",
              "This will take you to the payment gateway.",
              "info"
            )
          }
        >
          Proceed to Payment
        </Button>
      </div>

      {/* Order table */}
      <table className="min-w-full mt-12 table-auto border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-lime-500 text-white">
            <th className="p-2 sm:p-3 text-left">#</th>
            <th className="p-2 sm:p-3 text-left">Image</th>
            <th className="p-2 sm:p-3 text-left">Name</th>
            <th className="p-2 sm:p-3 text-left hidden md:table-cell">Taste</th>
            <th className="p-2 sm:p-3 text-left">Price</th>
            <th className="p-2 sm:p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartsData.map((cart, idx) => (
            <tr
              key={cart._id}
              className={`${idx % 2 === 0 ? "bg-slate-300" : "bg-gray-100"} `}
            >
              <td className="p-2 sm:p-3 text-sm sm:text-base">{idx + 1}</td>
              <td className="p-2 sm:p-3">
                <Avatar
                  src={cart.image}
                  shape="square"
                  size={40}
                  className="sm:size-48"
                />
              </td>
              <td className="p-2 sm:p-3 text-sm sm:text-base">{cart.name}</td>
              <td className="p-2 sm:p-3 hidden md:table-cell text-sm sm:text-base">
                {cart.taste}
              </td>
              <td className="p-2 sm:p-3 font-semibold text-sm sm:text-base">
                ${cart.price}
              </td>
              <td className="p-2 sm:p-3 text-center">
                <Button
                  onClick={() => handleDelete(cart._id)}
                  type="danger"
                  className="text-white bg-red-500 hover:bg-red-700"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
