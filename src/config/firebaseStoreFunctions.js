import { db } from "./firebaseInit";

// total count
export const getTotalCount = async (collectionName, docName) => {
  const docRef = db.collection(collectionName).doc(docName);
  const doc = await docRef.get();
  if (doc.exists) {
    return doc.data().total;
  }
};

export const totalCountIncrease = async (collectionName, docName) => {
  const docRef = db.collection(collectionName).doc(docName);
  const doc = await docRef.get();
  if (!doc.exists) {
    docRef.set({
      total: 1,
    });
  } else {
    await db.runTransaction((trans) => {
      return trans.get(docRef).then((doc) => {
        if (doc.exists) {
          let newTotal = doc.data().total + 1;
          trans.update(docRef, { total: newTotal });
        }
      });
    });
  }
};

export const totalCountDecrease = async (collectionName, docName) => {
  try {
    const docRef = db.collection(collectionName).doc(docName);
    return db.runTransaction((trans) => {
      return trans.get(docRef).then((doc) => {
        if (doc.exists) {
          let newTotal = doc.data().total - 1;
          trans.update(docRef, { total: newTotal });
        }
      });
    });
  } catch (error) {
    return error;
  }
};
// total count
