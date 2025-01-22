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

export const customerServiceSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters long"),
  emailAddress: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits"),
  organizationName: z
    .string()
    .min(3, "Organization name must be at least 3 characters long"),
  Message: z.string().min(10, "Message must be at least 10 characters long"),
  newsUpdates: z.boolean().optional(),
});

// TypeScript type inference for the schema
export type CustomerServiceFormInputs = z.infer<typeof customerServiceSchema>;

export type StepOneInputs = z.infer<typeof stepOneSchema>;
export type StepTwoInputs = z.infer<typeof stepTwoSchema>;
export type FormInputs = z.infer<typeof formSchema>;
