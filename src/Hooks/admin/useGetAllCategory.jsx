import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useGetAllCategory = () => {
  const axios = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allCategories"],
    queryFn: async () => {
      const response = await axios.get("/admin/get-category");
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetAllCategory;
