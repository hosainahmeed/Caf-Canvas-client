import axios from "axios";

function useAxiosPublic() {
  const axiosPublic = axios.create({
    baseURL: "http://localhost:5000",
  });

  return axiosPublic;
}

export default useAxiosPublic;
