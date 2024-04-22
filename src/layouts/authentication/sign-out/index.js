import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

const SignOut = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();

  useEffect(() => {
    setCurrentUser(null);
    navigate("/authentication/sign-in");
  }, [navigate]);

  return null;
};

export default SignOut;
