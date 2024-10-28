import axios from "axios";

function useAxiosPublic() {
  const axiosPublic = axios.create({
    baseURL: "https://caff-canvas.vercel.app",
  });

  return axiosPublic;
}

export default useAxiosPublic;
