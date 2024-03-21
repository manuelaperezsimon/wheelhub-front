import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export const createFormContext = createContext<any>(null);

type CreateFormContextType = {
  NUMBER_OF_STEPS: number;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  stepForward: () => void;
  stepBackward: () => void;
};

export function CreateFormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const NUMBER_OF_STEPS = 3;

  const stepForward = (): void => {
    if (currentStep === NUMBER_OF_STEPS) return;
    setCurrentStep((prev) => prev + 1);
  };

  const stepBackward = (): void => {
    if (currentStep === 1) return;
    setCurrentStep((prev) => prev - 1);
  };

  const value: CreateFormContextType = {
    NUMBER_OF_STEPS,
    currentStep,
    setCurrentStep,
    stepForward,
    stepBackward,
  };

  return (
    <createFormContext.Provider value={value}>
      {children}
    </createFormContext.Provider>
  );
}
