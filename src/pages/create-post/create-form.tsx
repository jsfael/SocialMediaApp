import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, DB } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description."),
  });

  const postsRef = collection(DB, "posts");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onCreatePost)} 
      style={{ display: "flex", flexDirection: "column", width: "50%", margin: "50px auto", alignItems: "center" }}>
      <input placeholder="Title..." {...register("title")} 
      style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
      <textarea placeholder="Description..." {...register("description")} 
      style={{ height: "100px", resize: "none", width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <p style={{ color: "red" }}>{errors.description?.message}</p>
      <input type="submit" value="Submit" 
      style={{ padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#007BFF", color: "white", cursor: "pointer" }} />
    </form>
  );
};
