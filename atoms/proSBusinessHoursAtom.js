import { atom } from "recoil";

export const proSBusinessHoursState = atom({
  key: "proSBusinessHoursState",
  default: {
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  },
});
