import { useContext } from "react";
import { createFormContext } from "../../context/formContext";
import "./HeaderStepper.scss";

export default function HeaderStepper(): JSX.Element {
  const { currentStep } = useContext(createFormContext);
  return (
    <div className="header__container">
      <span
        className={`step  step-one ${currentStep === 1 ? "active" : undefined}`}
      >
        1 {currentStep === 1 && <div className="indicator"></div>}
      </span>
      <hr className="line" />
      <span
        className={`step step-two ${currentStep === 2 ? "active" : undefined}`}
      >
        2 {currentStep === 2 && <div className="indicator"></div>}
      </span>
      <hr className="line" />
      <span
        className={`step step-three ${
          currentStep === 3 ? "active" : undefined
        }`}
      >
        3 {currentStep === 3 && <div className="indicator"></div>}
      </span>
    </div>
  );
}
