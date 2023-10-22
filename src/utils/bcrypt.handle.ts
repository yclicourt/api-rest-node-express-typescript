import { hash, compare } from "bcryptjs";

const encrypt = async (passPlane: string) => {
  const passwordHash = await hash(passPlane, 8);
  return passwordHash;
};

const verified = async (passPlane:string,passwordHash:string) => {

    const isCorrect = await compare(passPlane,passwordHash)
    return isCorrect
};

export { encrypt, verified };
