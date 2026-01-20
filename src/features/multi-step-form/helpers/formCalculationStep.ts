import type { AddOn, PlanId, PlanOption } from "../types/form.types";

export const findPlan = (plans: PlanOption[], id: PlanId) =>
    plans.find((p) => p.id === id) ?? null;

export const findAddOn = (addons: AddOn[], id: string) =>
    addons.find((a) => a.id === id) ?? null;

export const verifyAddOnSelected = (addons: string[], id: string) =>
    addons.includes(id);