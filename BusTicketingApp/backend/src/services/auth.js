import bcrypt from "bcrypt";
import { getOneUser, createUser } from "../repository/user";
import { createForeignPassenger } from "../repository/foriegnPassenger";
import { createLocalPassenger } from "../repository/localPassenger";
import { createInspector } from "../repository/inspector";
import { createPTManager } from "../repository/ptManager";
import logger from "../utils/logger";

export const loginUser = async ({ email, password }) => {
  const user = await getOneUser({ email }, true);

  if (!user) return false;

  const isPasswordMatch = await new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });

  if (!isPasswordMatch) return false;

  delete user.password;

  return user;
};

export const registerUser = async ({ user, specificData }) => {
  const encryptedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(
      user.password,
      parseInt(process.env.BCRYPT_SALT_ROUNDS),
      (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      }
    );
  });

  if (user.role === "LOCALPASSENGER") {
    var newLocalPassenger = await createLocalPassenger(specificData);
  } else if (user.role === "FORIEGNPASSENGER") {
    var newForeignPassenger = await createForeignPassenger(specificData);
  } else if (user.role === "INSPECTOR") {
    var newInspector = await createInspector(specificData);
  } else if (user.role === "PTMANAGER") {
    var newPTManager = await createPTManager(specificData);
  }

  const registeredUser = await createUser({
    ...user,
    password: encryptedPassword,
    LocalPassenger:
      user.role === "LOCALPASSENGER" ? newLocalPassenger?._id : null,
    ForeignPassenger:
      user.role === "FORIEGNPASSENGER" ? newForeignPassenger?._id : null,
    Inspector: user.role === "INSPECTOR" ? newInspector?._id : null,
    PTManager: user.role === "PTMANAGER" ? newPTManager?._id : null,
  });

  return registeredUser;
};
