import "./set-public-path";
import { v4 as uuidv4 } from "uuid";

// Anything exported from this file is importable by other in-browser modules.

export interface IAuthenticatedUser {
  name: string;
  token: string;
}

let authenticatedUser: IAuthenticatedUser | null = null;

export const getAuthenticatedUser = (): IAuthenticatedUser => {
  return authenticatedUser;
};

export const authenticate = (name): Promise<IAuthenticatedUser> => {
  if (name === "test") {
    authenticatedUser = {
      name,
      token: uuidv4()
    };
    return Promise.resolve(authenticatedUser);
  } else {
    return Promise.reject("invalid user");
  }
};
