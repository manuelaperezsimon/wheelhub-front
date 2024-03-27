import axios from "axios";
import { useContext, useState } from "react";
import { createFormContext } from "../context/formContext";
import { User } from "../interfaces/interfaces";

export const apiURL = process.env.REACT_APP_API_URL;

const useUser = () => {
  const { setError } = useContext(createFormContext);
  const createUser = async (userData: User) => {
    try {
      await axios.post(`${apiURL}users/create`, {
        username: userData.username,
        password: userData.password,
        clue: userData.clue,
      });

      return true;
    } catch (err) {
      setError(true);
    }
  };

  return { createUser };
};
export default useUser;
