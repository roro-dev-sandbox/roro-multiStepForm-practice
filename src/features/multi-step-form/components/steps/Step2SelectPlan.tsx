import { useFormContext, useWatch } from "react-hook-form";
import type {
    FormSchemaInput,
    FormSchemaOutput,
} from "../../schemas/formSchema";
import iconArcade from "@/assets/images/icon-arcade.svg";
import iconAdvanced from "@/assets/images/icon-advanced.svg";
import iconPro from "@/assets/images/icon-pro.svg";
import type { PlanOption } from "../../types/form.types";
import { Step2SelectPlanItem } from "./Step2SelectPlanItem";
import { ControllerInputRadio } from "@/components/ui/form/ControllerInputRadio";

const PlanOptions: PlanOption[] = [
    {
        id: "1-arcade",
        img: iconArcade,
        name: "Arcade",
        priceMonthly: 9,
        priceYearly: 90,
    },
    {
        id: "2-advanced",
        img: iconAdvanced,
        name: "Advanced",
        priceMonthly: 12,
        priceYearly: 120,
    },
    {
        id: "3-pro",
        img: iconPro,
        name: "Pro",
        priceMonthly: 15,
        priceYearly: 150,
    },
];

export function Step2SelectPlan() {
    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();
    const [billing, planCurrently] = useWatch({
        control,
        name: ["billing", "plan"],
    });

    return (
        <div>
            <h1 className="text-blue-950 font-bold text-2xl mb-1">
                Select Your Plan
            </h1>
            <p className="text-grey-500">
                You have the option of monthly or yearly billing.
            </p>
            <div className="flex justify-between gap-4 mt-6">
                {PlanOptions.map((plan) => (
                    <Step2SelectPlanItem
                        key={plan.id}
                        isYearly={billing === "yearly"}
                        isSelected={planCurrently === plan.name.toLowerCase()}
                        {...plan}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center gap-6 mt-6 p-2 bg-gray-100 rounded-md">
                <label htmlFor="monthly">Monthly</label>
                <div className="flex bg-blue-950 rounded-full p-1 ">
                    <ControllerInputRadio
                        control={control}
                        name="billing"
                        value="monthly"
                        className={`size-4 rounded-full cursor-pointer ${billing === 'monthly' ? 'bg-white' : 'bg-blue-950'}`}
                    />
                    <ControllerInputRadio
                        control={control}
                        name="billing"
                        value="yearly"
                        className={`size-4 rounded-full cursor-pointer ${billing === 'yearly' ? 'bg-white' : 'bg-blue-950'}`}
                    />
                </div>
                <label htmlFor="yearly">Yearly</label>
            </div>
        </div>
    );
}
