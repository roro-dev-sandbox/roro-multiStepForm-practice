import type { AddOn, Billing, PlanId, PlanOption } from "../types/form.types";

export const firstWordUpperCase = (str: string) =>
    str[0].toUpperCase() + str.slice(1);

export const transformAdverbToNoun = (str: string) => str.replace(/ly$/, "");

export const findPlan = (plans: PlanOption[], id: PlanId) =>
    plans.find((p) => p.id === id) ?? null;

export const findAddOn = (addons: AddOn[], id: string) =>
    addons.find((a) => a.id === id) ?? null;

export const findAddOns = (addons: AddOn[], ids: string[]) =>
    addons.filter((a) => ids.includes(a.id));

export const verifyAddOnSelected = (addons: string[], id: string) =>
    addons.includes(id);

export const calculateTotalPrice = (plan: PlanOption, addOns: AddOn[], billing: Billing): number => {
    const addOnsTotal = addOns.reduce(
        (total, addOn) => total + addOn.priceCents[billing],
        0,
    );
    return plan.priceCents[billing] + addOnsTotal;
};
