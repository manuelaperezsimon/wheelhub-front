import axios from "axios";
import { useState } from "react";
import { User } from "../interfaces/interfaces";

export const apiURL = process.env.REACT_APP_API_URL;

const useUser = () => {
  const [error, setError] = useState(false);
  const createUser = async (userData: User) => {
    try {
      await axios.post(`${apiURL}users/create`, {
        username: userData.username,
        password: userData.password,
        clue: userData.clue,
      });

      return true;
    } catch (error) {
      setError(true);
    }
  };

  return { createUser, error, setError };
};
export default useUser;
