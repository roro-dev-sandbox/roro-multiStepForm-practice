import { type Control, type UseFormReturn } from "react-hook-form";
import type { FormSchemaInput, FormSchemaOutput } from "../schemas/formSchema";

export type Billing = "monthly" | "yearly";
export type PlanId = "arcade" | "advanced" | "pro";

export interface PriceCents {
    monthly: number;
    yearly: number;
}

export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

export interface PlanOption {
    id: PlanId;
    name: string;
    img?: string;
    priceCents: PriceCents;
    description?: string;
}

export interface AddOn {
    id: string;
    name: string;
    description?: string;
    priceCents: PriceCents;
}

export interface FormState {
    // Step 1
    personal: PersonalInfo;

    // Step 2
    planId: PlanId;
    billing: Billing;

    // Step 3
    addOnIds: string[];

    // opcional: snapshot al enviar el formulario
    // summarySnapshot?: {
    //   planPriceCents: number;
    //   addOnsPriceCents: number;
    //   totalCents: number;
    // }
}

export type FormStep = 1 | 2 | 3 | 4;
export type FormType = UseFormReturn<FormSchemaInput, any, FormSchemaOutput>;
export type FormControl = Control<FormSchemaInput, any, FormSchemaOutput>;

export const formInitialState: FormState = {
    personal: {
        name: "",
        email: "",
        phone: "",
    },
    planId: "arcade",
    billing: "monthly",
    addOnIds: [],
};
