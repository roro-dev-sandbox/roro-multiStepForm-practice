import { FormProvider, useForm } from "react-hook-form";
import { formSchema, type FormSchemaInput, type FormSchemaOutput } from "./schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSteps } from "./hooks/useFormSteps";
import { formInitialState } from "./types/form.types";
import { useState } from "react";
import { StepIndicator, StepRenderer, StepButton, SuccessMessage } from "./components";

export const MultiStepForm = () => {
  const form = useForm<FormSchemaInput, any, FormSchemaOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: formInitialState,
    mode: "onChange",
  });
  const { currentStep, nextStep, prevStep, isFirstStep, isLastStep, goToStep } = useFormSteps();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);

  const onSubmit = (data: FormSchemaOutput) => {
    console.log("Form submitted:", data);
    setIsSubmitSuccess(true);
  };

  return (
    <FormProvider {...form}>
      <div className="bg-transparent sm:bg-white w-full h-max max-w-210 absolute top-24 sm:m-auto sm:inset-0 flex p-3 sm:pr-0 rounded-xl">
        <StepIndicator currentStep={currentStep} />
        <div className="bg-white w-full flex flex-col justify-between p-5 sm:py-6 sm:px-5 md:px-16 rounded-xl">
          {isSubmitSuccess ? (
            <SuccessMessage />
          ) : (
            <>
              <StepRenderer currentStep={currentStep} onStepClick={goToStep} />
              <StepButton
                currentStep={currentStep}
                nextStep={nextStep}
                prevStep={prevStep}
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                onSubmit={onSubmit}
              />
            </>
          )}
        </div>
      </div>
    </FormProvider>
  );
};
