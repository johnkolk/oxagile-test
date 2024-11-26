import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const FocusKeys = {
  Menu: "FocusKey:Menu",
  Grid: "FocusKey:Grid",
  // Keyboard: "FocusKey:Keyboard",
  // MenuItem: (id: string | number) => `FocusKey:MenuItem:${id}`,
};
