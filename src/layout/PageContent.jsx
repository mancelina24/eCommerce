import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setUser,
  setRoles,
  setTheme,
  setLanguage,
} from "../store/actions/clientActions";
import useLocalStorage from "../hooks/useLocalStorage";

const PageContent = ({ children }) => {
  const dispatch = useDispatch();

  // LocalStorage'dan veriyi almak
  const [user] = useLocalStorage("user", {});
  const [roles] = useLocalStorage("roles", []);
  const [theme] = useLocalStorage("theme", "light");
  const [language] = useLocalStorage("language", "en");

  useEffect(() => {
    // LocalStorage'dan alınan veriyi Redux store'a aktarma
    dispatch(setUser(user));
    dispatch(setRoles(roles));
    dispatch(setTheme(theme));
    dispatch(setLanguage(language));
  }, [dispatch, user, roles, theme, language]);

  return <div className={`theme-${theme}`}>{children}</div>;
};

export default PageContent;
