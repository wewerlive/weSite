import { ReactElement, useState } from 'react';

export function StepForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === steps.length - 1) {
        return prevStep;
      }
      return prevStep + 1;
    });
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === 0) {
        return prevStep;
      }
      return prevStep - 1;
    });
  };

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    nextStep,
    prevStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
}
