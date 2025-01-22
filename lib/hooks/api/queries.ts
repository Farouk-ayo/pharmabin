import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/axiosInstance";
import { RegisteredUser } from "@/lib/types";

export const useGetRegisterUsers = () => {
  return useQuery<RegisteredUser[]>({
    queryKey: ["get-register-user"],
    queryFn: async () => {
      const response = await axiosInstance.get("/register/get/");
      return response.data;
    },
  });
};
