// types/form.ts
import { z } from "zod";

export const stepOneSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  emailAddress: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(11, "Phone number must be at least 11 digits"),
});

export const stepTwoSchema = z.object({
  organizationName: z.string().min(3, "Business name is required"),
  City: z.string().min(5, "Business address is required"),
  State: z.string().min(1, "State is required"),
  localGovt: z.string().min(1, "Local Government is required"),
  zipCode: z.coerce
    .number()
    .positive("Zip code must be a positive number")
    .int("Zip code must be an integer"),
  Others: z.string().optional(),
});

export const formSchema = stepOneSchema.merge(stepTwoSchema);

export type StepOneInputs = z.infer<typeof stepOneSchema>;
export type StepTwoInputs = z.infer<typeof stepTwoSchema>;
export type FormInputs = z.infer<typeof formSchema>;
