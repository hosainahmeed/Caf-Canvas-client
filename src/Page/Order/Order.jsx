import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/Hook/useAxiosPublic";
import { Avatar, Button, Skeleton } from "antd";

function Order() {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  // Fetching cart data
  const { data: cartsData = [], isLoading } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const result = await axiosPublic.get("/carts");
      return result.data;
    },
  });

  // Delete item mutation
  const deleteItem = useMutation(
    async (id) => await axiosPublic.delete(`/carts/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts"]); // Refetch data after deletion
      },
    }
  );

  const handleDelete = (id) => {
    deleteItem.mutate(id);
  };

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <div className="overflow-x-auto px-4 py-6">
      <table className="table-auto w-full border-collapse bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-lime-500 text-white">
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Taste</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartsData.map((cart, idx) => (
            <tr key={cart._id} className="hover:bg-gray-100">
              <td className="p-3">{idx + 1}</td>
              <td className="p-3">
                <Avatar src={cart.image} shape="square" size={48} />
              </td>
              <td className="p-3">{cart.name}</td>
              <td className="p-3">{cart.taste}</td>
              <td className="p-3 font-semibold">${cart.price.toFixed(2)}</td>
              <td className="p-3 text-center">
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
