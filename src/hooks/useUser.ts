import axios from "axios";
import { User } from "../interfaces/interfaces";

export const apiURL = process.env.REACT_APP_API_URL;

const useUser = () => {
  const createUser = async (userData: User) => {
    try {
      await axios.post(`${apiURL}users/create`, {
        username: userData.username,
        password: userData.password,
        clue: userData.clue,
      });

      return true;
    } catch (error) {
      return false;
    }
  };

  return { createUser };
};
export default useUser;
