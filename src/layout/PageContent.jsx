import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthState } from "../store/actions/authActions";

const PageContent = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch, user]);

  return <div>{children}</div>;
};

export default PageContent;
