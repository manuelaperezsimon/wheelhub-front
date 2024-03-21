import { useContext, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import "./StepOne.scss";
import Button from "../Button/Button";
import { createFormContext } from "../../context/formContext";

interface StepOneProps {
  image: string;
  alt: string;
}

const StepOne = ({ image, alt }: StepOneProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const { stepForward } = useContext(createFormContext);
  return (
    <>
      <h2 className="title">
        <span className="title-word">Test</span> Frontend Wheel Hub
      </h2>
      <div className="step-one__container">
        <img src={image} alt={alt} />
        <div className="content">
          <span className="step__title">¡Bienvenido/a a WheelHub!</span>
          <p>
            Quieres formar parte de la comunidad? Pues adelante :) , simplemente
            deberás seguir estos pasos:
          </p>
          <ol>
            <li>
              Deberás confirmar que eres mayor de edad y que estás de acuerdo
              con el tratamiento de tus datos según la política de datos
              vigente.
            </li>
            <li>
              Luego, tendrás que crear tu usuario, contraseña y una pista para
              recordarla en caso de que sea necesitario (esto es opcional).
            </li>
            <li>
              Cuando esté todo ok, ya podrás darte cuenta con nuestro mensaje de
              confirmación.{" "}
            </li>
          </ol>
          <div className="check-option">
            <label htmlFor="checked"></label>
            <input
              checked={isChecked}
              type="checkbox"
              name="checked"
              id="checked"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-3"
              onChange={() => setIsChecked((prev) => !prev)}
            />
            <p>
              Confirmo que soy mayor de edad, y acepto el tratamiento de mis
              datos según la política de protección de datos vigente
            </p>
          </div>
        </div>

        <Button
          type="button"
          buttonText="Siguiente"
          classNameTypeButton={
            !isChecked ? "step__button" : "next-step__button"
          }
          actionOnclick={() => stepForward()}
          isDisable={!isChecked}
          icon={<SlArrowRight />}
        />
      </div>
    </>
  );
};

export default StepOne;
