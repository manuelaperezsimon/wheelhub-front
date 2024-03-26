import { useContext, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { createFormContext } from "../../context/formContext";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import "./StepTwo.scss";
import usePassWordValidation from "../../hooks/usePasswordValidation";
import useUser from "../../hooks/useUser";

type FormValues = {
  username: string;
  password: string;
  repeatPassword?: string;
  clue?: string;
};

const StepTwo = (): JSX.Element => {
  const { stepForward, stepBackward } = useContext(createFormContext);
  const {
    updatePasswordStrength,
    passwordStrength,
    repeatPasswordVisible,
    passwordVisible,
    togglePasswordVisibility,
  } = usePassWordValidation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValues>();

  const { createUser } = useUser();

  const values = getValues();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await createUser(data);
    stepForward();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-register"
        noValidate
      >
        <div className="form-register__group">
          <label htmlFor="username" className="form__label">
            Crea tu usuario
          </label>
          <input
            type="text"
            id="username"
            className={`form__input input-username ${
              errors.username ? "input-error" : undefined
            }`}
            placeholder="Introduce tu usuario"
            autoComplete="off"
            {...register("username", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              minLength: {
                value: 5,
                message:
                  "El nombre de usuario debe tener al menos 5 caracteres",
              },
              maxLength: {
                value: 25,
                message:
                  "El nombre de usuario debe tener como máximo 25 caracteres",
              },
            })}
          />
          {errors.username && (
            <span className="error">{errors.username.message}</span>
          )}
        </div>
        <div>
          <div className="form-register__group">
            <label htmlFor="password" className="form__label">
              Crea tu Contraseña
            </label>
            <div className="password-input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className={`form__input input-password ${passwordStrength} ${
                  errors.password ? "input-error" : undefined
                }`}
                placeholder="Crea tu Contraseña"
                autoComplete="off"
                {...register("password", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[A-Z]).{8,24}$/,
                    message:
                      "La contraseña debe tener entre 8 y 24 caracteres y contener al menos un número y una letra mayúscula.",
                  },
                })}
                onChange={(e) => updatePasswordStrength(e.target.value)}
              />
              {passwordVisible ? (
                <AiOutlineEyeInvisible
                  className="eye-icon"
                  onClick={() => togglePasswordVisibility("password")}
                />
              ) : (
                <AiOutlineEye
                  className="eye-icon"
                  onClick={() => togglePasswordVisibility("password")}
                />
              )}
            </div>
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>
          <div className="form-register__group">
            <label htmlFor="repeatPassword" className="form__label">
              Repite tu Contraseña
            </label>
            <div className="password-input-container">
              <input
                type={repeatPasswordVisible ? "text" : "password"}
                id="repeatPassword"
                className={`form__input input-repeat-password ${
                  errors.repeatPassword ? "input-error" : undefined
                }`}
                placeholder="Repite tu Contraseña"
                autoComplete="off"
                {...register("repeatPassword", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  validate: (value) => {
                    return (
                      value === watch("password") ||
                      "Las contraseñas no coinciden"
                    );
                  },
                })}
              />
              {repeatPasswordVisible ? (
                <AiOutlineEyeInvisible
                  className="eye-icon"
                  onClick={() => togglePasswordVisibility("repeatPassword")}
                />
              ) : (
                <AiOutlineEye
                  className="eye-icon"
                  onClick={() => togglePasswordVisibility("repeatPassword")}
                />
              )}
            </div>
            {errors.repeatPassword && (
              <span className="error">{errors.repeatPassword.message}</span>
            )}
          </div>
        </div>
        <div className="form-register__group">
          <p>
            También puedes crear una pista que te ayude a recordar tu
            contraseña.
          </p>

          <label htmlFor="clue" className="form__label">
            Crea tu pista para recordar tu contraseña (opcional)
          </label>
          <input
            type="text"
            id="clue"
            className={`form__input input-clue ${
              errors.clue ? "input-error" : undefined
            }`}
            placeholder="Introduce tu pista"
            autoComplete="off"
            {...register("clue", {
              required: {
                value: false,
                message: "",
              },
              maxLength: {
                value: 60,
                message: "La pista debe tener como máximo 60 caracteres",
              },
            })}
          />
        </div>
        {errors.clue && <span className="error">{errors.clue.message}</span>}
        <div className="form__button__group">
          <Button
            buttonText="Atrás"
            type="button"
            classNameTypeButton="backward-step__button"
            actionOnclick={stepBackward}
          />
          <Button
            buttonText="Siguiente"
            type="submit"
            classNameTypeButton="next-step__button"
            actionOnclick={isValid ? () => onSubmit(values) : () => {}}
            icon={<SlArrowRight />}
          />
        </div>
      </form>{" "}
    </>
  );
};

export default StepTwo;
