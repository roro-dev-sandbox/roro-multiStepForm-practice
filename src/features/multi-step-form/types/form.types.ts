import { type Control, type UseFormReturn } from "react-hook-form";
import type { FormSchemaInput, FormSchemaOutput } from "../schemas/formSchema";

export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

export interface PlanOption {
    id: string;
    img: string;
    name: string;
    priceMonthly: number;
    priceYearly: number;
}

export interface FormData {
    // Step 1
    name: string;
    email: string;
    phone: string;

    // Step 2
    plan: "arcade" | "advanced" | "pro";
    billing: "monthly" | "yearly";

    // Step 3
    addOns: string[];
}

export type FormStep = 1 | 2 | 3 | 4;
export type FormType = UseFormReturn<FormSchemaInput, any, FormSchemaOutput>;
export type FormControl = Control<FormSchemaInput, any, FormSchemaOutput>;
