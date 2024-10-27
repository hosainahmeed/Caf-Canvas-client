import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/Hook/useAxiosPublic";
import SectionHeader from "../../Components/utils/sectionHeader";
import Swal from "sweetalert2";

function Menu() {
  const axiosPublic = useAxiosPublic();
  const { data: menuData = [], isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const result = await axiosPublic.get("/menu");
      return result.data;
    },
  });

  if (isLoading) {
    return <p>..loading</p>;
  }

  // Filter menuData into two separate arrays for Popular and Special offers
  const popularOffers = menuData.filter((item) => item.Offer === "Popular");
  const specialOffers = menuData.filter((item) => item.Offer === "Special");

  const addToCart = (data) => {
    console.log(data);

    const { _id, Category, Details, Name, Offer, Photo, Price, Taste } = data;
    const cartData = {
      id: _id,
      name: Name,
      taste:Taste,
      price:Price,
      image: Photo,
      description: Details,
      Offer,
      Category,
    };

    if (!cartData) {
      return;
    }
    axiosPublic.post("/carts", cartData).then((res) => {
      console.log(res.data);
      if (res.data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: `${Name} is added in Cart.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      {/* Popular Offers Section */}
      <section>
        <SectionHeader head={"Popular Offers"}></SectionHeader>
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularOffers.map((data) => (
            <div key={data._id} className="card shadow-none rounded-none glass">
              <figure className="h-56 md:h-72">
                <img
                  src={data.Photo}
                  alt={data.Name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body p-0 pt-6">
                <h2 className="card-title text-xl text-black">{data.Name}</h2>
                <p className="text-gray-800">{data.Details}</p>
                <p className="text-gray-800">
                  <b>Taste : {data.Taste}</b>
                </p>
                <p className="text-gray-800">
                  <b>${data.Price}</b>
                </p>
              </div>
              <button
                onClick={() => addToCart(data)}
                className="btn mt-4 bg-lime-300"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="mt-10">
        <SectionHeader head={"Special Offers"}></SectionHeader>
        <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOffers.map((data) => (
            <div key={data._id} className="card shadow-none rounded-none glass">
              <figure className="h-80 md:h-96">
                <img
                  src={data.Photo}
                  alt={data.Name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body p-0 pt-6">
                <h2 className="card-title text-xl text-black">{data.Name}</h2>
                <p className="text-gray-800">{data.Details}</p>
                <p className="text-gray-800">
                  <b>Taste : {data.Taste}</b>
                </p>
                <p className="text-gray-800">
                  <b>${data.Price}</b>
                </p>
              </div>
              <button
                onClick={() => addToCart(data)}
                className="btn mt-4 bg-lime-300"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
