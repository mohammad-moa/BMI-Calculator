import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const makeClass = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
