import { createContext, useState, ReactNode, useEffect } from "react";

export const createFormContext = createContext<any>(null);

type CreateFormContextType = {
  NUMBER_OF_STEPS: number;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  stepForward: () => void;
  stepBackward: () => void;
  error: boolean;
  setError: (error: boolean) => void;
};

export function CreateFormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentStep, setCurrentStepState] = useState<number>(1);
  const [error, setErrorState] = useState<boolean>(false);

  const setCurrentStep = (step: number) => {
    setCurrentStepState(step);
    localStorage.setItem("currentStep", step.toString());
  };

  const setError = (error: boolean) => {
    setErrorState(error);
    localStorage.setItem("error", error.toString());
  };

  useEffect(() => {
    const storedStep = localStorage.getItem("currentStep");
    const storedError = localStorage.getItem("error");

    if (storedStep) {
      setCurrentStepState(parseInt(storedStep));
    }

    if (storedError) {
      setErrorState(storedError === "true");
    }
  }, []);

  const NUMBER_OF_STEPS = 3;

  const stepForward = (): void => {
    if (currentStep === NUMBER_OF_STEPS) return;
    setCurrentStep(currentStep + 1);
  };

  const stepBackward = (): void => {
    if (currentStep === 1) return;
    setCurrentStep(currentStep - 1);
  };

  const value: CreateFormContextType = {
    NUMBER_OF_STEPS,
    currentStep,
    setCurrentStep,
    stepForward,
    stepBackward,
    error,
    setError,
  };

  return (
    <createFormContext.Provider value={value}>
      {children}
    </createFormContext.Provider>
  );
}
