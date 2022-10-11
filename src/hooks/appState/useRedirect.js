import { useNavigate } from "react-router-native";

const APPBAR_PAGES = ["Home","Settings","Liked","Browse"];


export const useRedirect = (setPage) => {

  let navigate = useNavigate();

  const _parseDirection = (direction) => direction[1].toUpperCase() + direction.substring(2);

  const redirect = (to) => {
    const parsedDirection = _parseDirection(to);
    navigate(to);
    if(APPBAR_PAGES.includes(parsedDirection)) setPage(parsedDirection);
  };

  return redirect;
};