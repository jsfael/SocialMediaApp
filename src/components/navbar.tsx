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
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "10px",
        height: "50px",
      }}
    >
      <div className="navbar-links" style={{ display: "flex", gap: "10px" }}>
        <Link
          to="/"
          className="navbar-link"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Home
        </Link>
        {!user ? (
          <Link
            to="/login"
            className="navbar-link"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Login
          </Link>
        ) : (
          <Link
            to="/createpost"
            className="navbar-link"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Create Post
          </Link>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {user && (
          <>
            <h3 style={{ margin: "0" }}>{user?.displayName}</h3>
            <img
              src={user?.photoURL || ""}
              width="50px"
              height="50px"
              style={{ borderRadius: "10px" }}
              alt="userPhoto"
            />
            <button style={{ cursor: "pointer" }} onClick={signUserOut}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
