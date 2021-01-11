import { firebaseInit, db } from "./firebaseInit";

export const createUser = async (email, password) => {
  try {
    const user = await firebaseInit
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    throw new Error("User create error!");
  }
};

export const signInUser = async (email, password) => {
  try {
    await firebaseInit.auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    return false;
  }
};

export const signOutUser = async () => {
  try {
    await firebaseInit.auth().signOut();
    window.location.reload();
    return true;
  } catch (error) {
    throw new Error("User sign out error!");
  }
};

export const hasSigninUser = () => {
  return new Promise(function (resolve, reject) {
    firebaseInit.auth().onAuthStateChanged(async function (user) {
      if (user) {
        const { displayName, email, uid } = user;
        let data = await db.collection("users").doc(uid).get();
        data = data.data();
        resolve({ displayName, email, uid, hasUser: true, role: data.role });
      } else {
        return;
      }
    });
  });
};
