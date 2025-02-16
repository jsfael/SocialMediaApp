import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div
      style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f0f0f0", padding: "10px", height: "50px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <Link
          to="/"
          style={{textDecoration: "none", color: "#007bff", fontWeight: "bold",
          }}
        >
          Home
        </Link>
        {!user && (
          <>
            <Link to="/login" style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold"}}>Login </Link>
          </>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {user && (
          <>
            <h3 style={{ margin: "0" }}>{user?.displayName}</h3>
            <img src={user?.photoURL || ""} width="50px" height="50px" style={{ borderRadius: "10px" }} alt="userPhoto" />
            <button onClick={signUserOut}> Log Out </button>
          </>
        )}
      </div>
    </div>
  );
};
