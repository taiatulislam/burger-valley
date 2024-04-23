import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';

const useGetOneNewsData = (id) => {
    const instance = useAxios();

    const { data: oneNewsData = [], isLoading, error } = useQuery({
        queryKey: ["oneNewsData", id], // Adding id to the queryKey
        queryFn: async () => {
            const res = await instance.get(`/api/v1/news/${id}`);
            return res.data;
        }
    });

    return { oneNewsData, isLoading, error }; // Return an object instead of an array
};

export default useGetOneNewsData;
