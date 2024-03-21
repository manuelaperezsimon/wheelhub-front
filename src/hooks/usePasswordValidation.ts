import { useState } from "react";

export enum passwordStrengths {
  EMPTY = "password-empty",
  WEAK = "password-weak",
  MEDIUM = "password-medium",
  STRONG = "password-strong",
}

const usePassWordValidation = () => {
  const [passwordStrength, setPasswordStrength] = useState(
    passwordStrengths.EMPTY
  );

  const updatePasswordStrength = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const passwordLength = password.length;

    if (passwordLength > 0 && passwordLength < 4) {
      setPasswordStrength(passwordStrengths.WEAK);
    } else if (
      (passwordLength > 4 && passwordLength < 8) ||
      hasUppercase !== hasNumber
    ) {
      setPasswordStrength(passwordStrengths.MEDIUM);
    } else if (
      passwordLength >= 8 &&
      passwordLength <= 24 &&
      hasUppercase &&
      hasNumber
    ) {
      setPasswordStrength(passwordStrengths.STRONG);
    }
  };

  return {
    updatePasswordStrength,
    passwordStrength,
  };
};

export default usePassWordValidation;
