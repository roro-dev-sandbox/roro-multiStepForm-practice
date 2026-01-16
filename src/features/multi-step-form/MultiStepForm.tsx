import { FormProvider, useForm } from "react-hook-form";
import {
  formSchema,
  type FormSchemaInput,
  type FormSchemaOutput,
} from "./schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./components/FormField";
import { useFormSteps } from "./hooks/useFormSteps";
import { StepIndicator } from "./components/StepIndicator";
import { StepButton } from "./components/StepButton";

export const MultiStepForm = () => {
  const form = useForm<FormSchemaInput, any, FormSchemaOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "advanced",
      billing: "monthly",
      addOns: [],
    },
    mode: "onChange",
  });
  const { currentStep, nextStep, prevStep, isFirstStep, isLastStep } = useFormSteps();

  const onSubmit = (data: FormSchemaOutput) => {
    console.log("Form submitted:", data);
  };

  return (
    <FormProvider {...form}>
      <div className="bg-white w-full max-w-210 fixed top-1/2 left-1/2 -translate-1/2 flex py-3 pl-3 rounded-xl shadow-md">
        <StepIndicator currentStep={currentStep} />
        <div className="mx-auto py-6 flex flex-col justify-between">
          <FormField currentStep={currentStep} />
          <StepButton
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </FormProvider>
  );
};
