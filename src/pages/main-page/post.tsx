import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { DB, auth } from "../../config/firebase";
import { Post as IPost } from "./main";

interface Props {
  post: IPost;
}

interface Like {
  likeId: string;
  userId: string;
}

export const Post = ({ post }: Props) => {
  const [user] = useAuthState(auth);
  const [likes, setLikes] = useState<Like[] | null>(null);

  const likesRef = collection(DB, "likes");

  const fetchLikes = useCallback(async () => {
    const likesQuery = query(likesRef, where("postId", "==", post.id));
    const data = await getDocs(likesQuery);
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  }, [post.id]);

  const handleAddLike = async () => {
    if (!user) return;
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user.uid,
        postId: post.id,
      });
      setLikes((prev) =>
        prev
          ? [...prev, { userId: user.uid, likeId: newDoc.id }]
          : [{ userId: user.uid, likeId: newDoc.id }]
      );
    } catch (err) {
      console.error("Error adding like: ", err);
    }
  };

  const handleRemoveLike = async () => {
    if (!user) return;
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user.uid)
      );
      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteData.docs[0].id;
      await deleteDoc(doc(DB, "likes", likeId));
      setLikes(
        (prev) => prev?.filter((like) => like.likeId !== likeId) || null
      );
    } catch (err) {
      console.error("Error removing like: ", err);
    }
  };

  const hasUserLiked = likes?.some((like) => like.userId === user?.uid);

  useEffect(() => {
    fetchLikes();
  }, [fetchLikes]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "20px auto",
        backgroundColor: "#fff",
      }}
    >
      <div className="title" style={{ marginBottom: "10px" }}>
        <h1 style={{ fontSize: "24px", color: "#333" }}>{post.title}</h1>
      </div>
      <div className="body" style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "16px", color: "#555" }}>{post.description}</p>
      </div>
      <div
        className="footer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p style={{ fontSize: "14px", color: "#888" }}>@{post.username}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={hasUserLiked ? handleRemoveLike : handleAddLike}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              marginRight: "10px",
            }}
          >
            {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
          </button>
          {likes && (
            <p style={{ fontSize: "14px", color: "#888" }}>
              Likes: {likes.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
