import { useState, createContext, useContext, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GithubAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase/config';

export const AppContext = createContext();
const AppProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const provider = new GithubAuthProvider();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setLoading(false);
      setError("");
    });
    return unsubscribe;
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(auth.currentUser, {
          displayName: email.split('@')[0],
        })
      })
      .catch(err => {
        setError(err.message.split(':')[1]);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  const loginUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
      }).catch(err => {
        setError(err.message.split(':')[1]);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  const githubLogin = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then(user => {
        console.log(user.user);
        updateProfile(auth.currentUser, {
          displayName: email.split('@')[0],
        })
      })
      .catch(err => {
        setError(err.message.split(':')[1])
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const resetPassword = (email) => {
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log(`check email`);
      }).catch(err => {
        setError(err.message.split(':')[1]);
      }).finally(() => {
        setLoading(false);
      })
  }

  const logout = () => {
    signOut(auth)
  }
  return <AppContext.Provider
    value=
    {{
      createUser,
      loginUser,
      resetPassword,
      logout,
      githubLogin,
      loading,
      user,
      error
    }}>
    {children}
  </AppContext.Provider>
}

export const GlobalContext = () => useContext(AppContext);
export { AppProvider };