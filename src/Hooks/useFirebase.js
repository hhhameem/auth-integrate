import FirebaseInit from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  FirebaseInit();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

  const googleSignIn = () => {
    console.log("okay");
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  return {
    user,
    error,
    googleSignIn,
    logOut,
  };
};

export default useFirebase;
