// types/form.ts
import { z } from "zod";

export const stepOneSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
});

export const stepTwoSchema = z.object({
  businessName: z.string().min(3, "Business name is required"),
  businessAddress: z.string().min(5, "Business address is required"),
  state: z.string().min(1, "State is required"),
  lga: z.string().min(1, "Local Government is required"),
  zipCode: z.string().min(4, "Valid zip code is required"),
  otherDetails: z.string().optional(),
});

export const formSchema = stepOneSchema.merge(stepTwoSchema);

export type StepOneInputs = z.infer<typeof stepOneSchema>;
export type StepTwoInputs = z.infer<typeof stepTwoSchema>;
export type FormInputs = z.infer<typeof formSchema>;
