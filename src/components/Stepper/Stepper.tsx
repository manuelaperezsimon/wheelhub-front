import { useContext } from "react";

import WheelHubLogo from "../../assets/img/Logotipo-Vertical-Verde-Alta.png";
import { createFormContext } from "../../context/formContext";
import HeaderStepper from "../HeaderStepper/HeaderStepper";
import StepOne from "../StepOne/StepOne";
import StepThree from "../StepThree/StepThree";
import StepTwo from "../StepTwo/StepTwo";
import "./Stepper.scss";

export default function Stepper(): JSX.Element {
  const { currentStep } = useContext(createFormContext);
  return (
    <>
      <HeaderStepper />
      <div className="stepper__container">
        {(currentStep === 1 || currentStep === 2) && (
          <div className="title-container">
            <h2 className="title">
              <span className="title-word">Test</span> Frontend Wheel Hub
            </h2>
          </div>
        )}
        {currentStep === 1 && (
          <StepOne alt="Wheel Hub Logo" image={WheelHubLogo} />
        )}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
      </div>
    </>
  );
}
