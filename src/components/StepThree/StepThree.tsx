import { useContext } from "react";
import Img8 from "../../assets/img/success.png";
import Img9 from "../../assets/img/error.png";

import { createFormContext } from "../../context/formContext";
import Button from "../Button/Button";
import "./StepThree.scss";

const StepThree = (): JSX.Element => {
  const { stepBackward, setCurrentStep, error } = useContext(createFormContext);

  return (
    <>
      <div className="step-three-container">
        {error ? (
          <div className="final-content">
            <img className="final-step__image" src={Img9} alt="Error" />
            <div className="hola">
              <span className="step-title">
                ¡La cuenta no se ha podido crear!
              </span>
              <p>Ha habido un problema.</p>
              <p>Vuelve a intentarlo</p>
            </div>
          </div>
        ) : (
          <div className="final-content">
            <img className="final-step__image" src={Img8} alt="Check" />
            <div>
              <span className="step-title">
                ¡La cuenta se creó correctamente!
              </span>
              <p>
                Ya eres parte de la comunidad. Ahora puedes disfrutar de
                nuestros servicios y tener un impacto positivo a través de la
                innovación digital
              </p>
            </div>
          </div>
        )}
        <hr className="bottom-line" />
        <div className="button__group">
          <Button
            buttonText="Atrás"
            type="button"
            classNameTypeButton="forward-step__button"
            actionOnclick={() => stepBackward()}
          />
          <Button
            buttonText="Volver al inicio"
            type="button"
            classNameTypeButton="final-step__button"
            actionOnclick={() => {
              setCurrentStep(1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default StepThree;
