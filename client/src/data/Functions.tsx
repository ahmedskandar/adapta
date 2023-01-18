import { useDispatch } from "react-redux";

export const calcDate = () => {
  const currDate = new Date();

  const currYear = currDate.getFullYear();
  const currMonth =
    currDate.getMonth() + 1 < 10 && `0${currDate.getMonth() + 1}`;

  const min = `${currYear}-${currMonth}`;
  const max = `${currYear + 10}-${currMonth}`;

  return [min, max];
};
