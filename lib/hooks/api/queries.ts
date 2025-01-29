import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/axiosInstance";
import { ArticleCard, CustomerService, RegisteredUser } from "@/lib/types";

export const useGetRegisterUsers = () => {
  return useQuery<RegisteredUser[]>({
    queryKey: ["get-register-user"],
    queryFn: async () => {
      const response = await axiosInstance.get("/register/get/");
      console.log(response.data);
      return response.data;
    },
  });
};

export const useGetArticles = () => {
  return useQuery<ArticleCard[]>({
    queryKey: ["get-article"],
    queryFn: async () => {
      const response = await axiosInstance.get("/article/get/");
      return response.data;
    },
  });
};

export const useGetCustomer = () => {
  return useQuery<CustomerService[]>({
    queryKey: ["get-customer"],
    queryFn: async () => {
      const response = await axiosInstance.get("/customer/get/");
      return response.data;
    },
  });
};
