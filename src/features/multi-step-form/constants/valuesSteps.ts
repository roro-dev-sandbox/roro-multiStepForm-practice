import iconPro from '@/assets/images/icon-pro.svg';
import iconAdvanced from '@/assets/images/icon-advanced.svg';
import iconArcade from '@/assets/images/icon-arcade.svg';
import type { AddOn, PlanOption } from "../types/form.types";

export const DATE_VALUE: { [key: string]: string } = {
    monthly: "mo",
    yearly: "yr",
};

export const PLANS: PlanOption[] = [
    {
        id: "arcade",
        name: "Arcade",
        priceCents: { monthly: 9, yearly: 90 },
        img: iconArcade,
        description: "2 months free",
    },
    {
        id: "advanced",
        name: "Advanced",
        priceCents: { monthly: 12, yearly: 120 },
        img: iconAdvanced,
        description: "2 months free",
    },
    {
        id: "pro",
        name: "Pro",
        priceCents: { monthly: 15, yearly: 150 },
        img: iconPro,
        description: "2 months free",
    },
];


export const ADDONS: AddOn[] = [
    {
        id: "online-service",
        name: "Online service",
        description: "Access to multiplayer games",
        priceCents: { monthly: 1, yearly: 10 },
    },
    {
        id: "larger-storage",
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        priceCents: { monthly: 2, yearly: 20 },
    },
    {
        id: "custom-profile",
        name: "Customizable profile",
        description: "Custom theme on your profile",
        priceCents: { monthly: 2, yearly: 20 },
    },
];