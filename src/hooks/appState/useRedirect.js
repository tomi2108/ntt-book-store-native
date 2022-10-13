import { useNavigate } from "react-router-native";

const APPBAR_PAGES = ["home","settings","liked","browse"];


export const useRedirect = (setPage) => {

  let navigate = useNavigate();

  const _parseDirection = (direction) => direction.substring(1);

  const redirect = (to) => {
    const parsedDirection = _parseDirection(to);
    navigate(to);
    if(APPBAR_PAGES.includes(parsedDirection)) setPage(parsedDirection);
  };

  return redirect;
};