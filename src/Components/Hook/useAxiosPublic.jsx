import axios from "axios";

function useAxiosPublic() {
  const axiosPublic = axios.create({
    baseURL: "https://caff-canvas.vercel.app",
    // baseURL: "http://localhost:5000",
  });

  return axiosPublic;
}

export default useAxiosPublic;
