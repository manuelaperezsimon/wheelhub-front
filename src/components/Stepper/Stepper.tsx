import { useContext } from "react";

import WheelHubLogo from "../../assets/img/Logotipo-Vertical-Verde-Alta.png";
import { createFormContext } from "../../context/formContext";
import StepOne from "../StepOne/StepOne";
import StepThree from "../StepThree/StepThree";
import StepTwo from "../StepTwo/StepTwo";

export default function Stepper(): JSX.Element {
  const { currentStep } = useContext(createFormContext);
  return (
    <div>
      {currentStep === 1 && (
        <StepOne alt="Wheel Hub Logo" image={WheelHubLogo} />
      )}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
    </div>
  );
}
