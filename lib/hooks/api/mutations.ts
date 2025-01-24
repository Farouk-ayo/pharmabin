import { CustomerService, LoginInputs, RegisteredUser } from "@/lib/types";
import { showToast } from "@/lib/util";
import axiosInstance from "@/services/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

export const usePostAdmin = () => {
  const mutationDetails = useMutation({
    mutationKey: ["post-admin"],
    mutationFn: (adminDetails: LoginInputs) => {
      return axiosInstance.post("/admin/login", adminDetails);
    },
  });
  return mutationDetails;
};

export const useDeleteCustomerFeedback = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-customer-feedback"],
    mutationFn: (id: string) => {
      return axiosInstance.delete(`/customer/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-customer"] });
    },
    onError: (error) => {
      showToast.error(error.message);
    },
  });
};

export const useDeleteRegisteredUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-register-user"],
    mutationFn: (id: string) => {
      return axiosInstance.delete(`/register/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-register-user"] });
    },
    onError: (error) => {
      showToast.error(error.message);
    },
  });
};

export const usePatchRegisterUser = () => {
  const queryClient = useQueryClient();
  const mutationDetails = useMutation({
    mutationKey: ["update-register-user"],
    mutationFn: ({ _id, data }: { _id: string; data: RegisteredUser }) => {
      return axiosInstance.patch(`/register/${_id}`, data);
    },
    onSuccess: (data) => {
      const id = data.data.id;
      queryClient.setQueryData(
        ["get-register-user"],
        (oldData: RegisteredUser | undefined) => {
          if (!oldData) return oldData;

          if (oldData._id === id) {
            return data.data;
          }
          return oldData;
        }
      );
      showToast.success("updated user successfully");
    },
    onError: (error: Error) => {
      showToast.error(error.message);
    },
  });
  return mutationDetails;
};
