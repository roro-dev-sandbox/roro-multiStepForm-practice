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
  const { currentStep, nextStep, prevStep, isFirstStep, isLastStep } =
    useFormSteps();

  const onSubmit = (data: FormSchemaOutput) => {
    console.log("Form submitted:", data);
  };

  return (
    <FormProvider {...form}>
      <div className="bg-transparent sm:bg-white w-full h-max max-w-210 absolute top-24 sm:m-auto sm:inset-0 flex p-4 sm:pr-0 rounded-xl">
        <StepIndicator currentStep={currentStep} />
        <div className="bg-white sm:bg-transparent w-full flex flex-col justify-between p-5 sm:py-6 sm:px-10 md:px-18 rounded-xl">
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
