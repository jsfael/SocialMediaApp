import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center"}}>
      <h3>Sign In With Google To Continue</h3>
      <button 
        onClick={signInWithGoogle} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#4285F4",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          gap: "10px"
        }}
      >
        Sign In With Google
      </button>
    </div>
  );
};
