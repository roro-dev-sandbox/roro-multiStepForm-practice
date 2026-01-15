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
      <StepIndicator currentStep={currentStep} />
      <FormField />
      <StepButton
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};
