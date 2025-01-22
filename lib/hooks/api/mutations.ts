import { CustomerService, RegisteredUser } from "@/lib/types";
import axiosInstance from "@/services/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const usePostRegister = () => {
  const mutationDetails = useMutation({
    mutationKey: ["post-register"],
    mutationFn: (registrationDetails: RegisteredUser) => {
      return axiosInstance.post("/register/add", registrationDetails);
    },
  });
  return mutationDetails;
};

export const usePostCustomer = () => {
  const mutationDetails = useMutation({
    mutationKey: ["post-customer"],
    mutationFn: (customerServiceDetails: CustomerService) => {
      return axiosInstance.post("/customer/add", customerServiceDetails);
    },
  });
  return mutationDetails;
};
