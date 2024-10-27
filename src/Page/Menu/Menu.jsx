import { useState } from "react";
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

  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const SkeletonCard = () => {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }
  // Filter menuData based on search term
  const filteredData = menuData.filter((item) =>
    item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredData.length === 0) {
    return (
      <>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered mt-12 w-full max-w-xs"
        />
        <p>We dont have</p>
      </>
    );
  }

  // Filter and sort the data for Popular and Special offers
  const popularOffers = filteredData
    .filter((item) => item.Offer === "Popular")
    .sort((a, b) =>
      sortOrder === "asc" ? a.Price - b.Price : b.Price - a.Price
    );

  const specialOffers = filteredData
    .filter((item) => item.Offer === "Special")
    .sort((a, b) =>
      sortOrder === "asc" ? a.Price - b.Price : b.Price - a.Price
    );

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const addToCart = (data) => {
    const { _id, Category, Details, Name, Offer, Photo, Price, Taste } = data;
    const cartData = {
      id: _id,
      name: Name,
      taste: Taste,
      price: Price,
      image: Photo,
      description: Details,
      Offer,
      Category,
    };

    if (!cartData) return;

    axiosPublic.post("/carts", cartData).then((res) => {
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
      {/* Search and Sort Controls */}
      <div className="flex justify-between mt-12 items-center mb-6 px-3">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />

        {/* Toggle Sort Order Button */}
        <button
          onClick={toggleSortOrder}
          className="btn bg-lime-500 text-white"
        >
          Sort by Price: {sortOrder === "asc" ? "High Price" : "Low Price"}
        </button>
      </div>

      {/* Popular Offers Section */}
      <section>
        <SectionHeader head={"Popular Offers"} />
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
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
                  <b>Taste: {data.Taste}</b>
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
        <SectionHeader head={"Special Offers"} />
        <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
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
                  <b>Taste: {data.Taste}</b>
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
