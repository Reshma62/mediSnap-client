import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetSingleCategory = (id) => {
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["category_single", id],
    queryFn: async () => {
      // const response = await axios.get(`/admin/get-singleCategory/${id}`);
      const response = await axios.get(
        `/admin/get-singleCategory?cat_id=${id}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetSingleCategory;
