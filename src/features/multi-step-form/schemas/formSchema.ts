import { z } from "zod";

export const personalInfoSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export const selectPlanSchema = z.object({
    plan: z.enum(["arcade", "advanced", "pro"]),
    billing: z.enum(["monthly", "yearly"]),
});

export const addOnsSchema = z.object({
    addOns: z.array(z.string()),
});

export const formSchema = z.object({
    name: z.string().trim().min(1, "Name is required").min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address").trim(),
    phone: z.string().trim().min(1, "Phone number is required").min(10, "Phone number must be at least 10 digits"),
    plan: z.enum(["arcade", "advanced", "pro"]),
    billing: z.enum(["monthly", "yearly"]),
    addOns: z.array(z.string()),
});

export type FormSchema = z.infer<typeof formSchema>;
export type FormSchemaInput = z.input<typeof formSchema>;
export type FormSchemaOutput = z.output<typeof formSchema>;

