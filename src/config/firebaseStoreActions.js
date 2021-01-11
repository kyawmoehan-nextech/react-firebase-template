import { db } from "./firebaseInit";
// import { getWeek } from "./Actions";
import firebase from "firebase";

// actions
export const addFirestore = async (collectionName, data) => {
  try {
    await db.collection(collectionName).add(data);
    return "OK";
  } catch (error) {
    throw new Error("Add Data error!");
  }
};

export const addFirestoreWithId = async (collectionName, id, data) => {
  try {
    await db.collection(collectionName).doc(`${id}`).set(data);
    return "OK";
  } catch (error) {
    throw new Error("Add Data error!");
  }
};

export const getDocsFromCollection = (collectionName, setData) => {
  db.collection(collectionName).onSnapshot(function (snapshot) {
    snapshot.docChanges().forEach(function (change) {
      if (change.type === "added") {
        setData((prev) => {
          return [...prev, { ...change.doc.data(), id: change.doc.id }];
        });
      }
      if (change.type === "modified") {
        setData((prev) => {
          return prev.map((doc) =>
            doc.id === change.doc.id
              ? { ...change.doc.data(), id: change.doc.id }
              : doc
          );
        });
      }
      if (change.type === "removed") {
        setData((prev) => {
          return prev.filter((doc) => doc.id !== change.doc.id);
        });
      }
    });
  });
};

export const getDocById = async (collectionName, id, setData) => {
  try {
    const docRef = db.collection(collectionName).doc(id);
    const doc = await docRef.get();
    if (doc.exists) {
      setData({ ...doc.data(), id: doc.id });
    } else {
      throw new Error("No Document Found!");
    }
  } catch (error) {
    throw new Error("Get doc Error!");
  }
};

export const updateDocById = async (collectionName, id, data) => {
  try {
    const dbRef = db.collection(collectionName).doc(id);
    return db.runTransaction((trans) => {
      return trans.get(dbRef).then((doc) => {
        if (doc.exists) {
          trans.update(dbRef, data);
        } else {
          throw new Error("Doc not found!");
        }
      });
    });
  } catch (error) {
    throw new Error("Update Doc Error!");
  }
};

export const deletDocById = async (collectionName, id) => {
  try {
    db.collection(collectionName).doc(id).delete();
    return "OK";
  } catch (error) {
    throw new Error("Doc Delete error!");
  }
};
// actions

// condation
export const getDocsWithLimit = (collectionName, setData, limit) => {
  db.collection(collectionName)
    .limit(limit)
    .onSnapshot(function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type === "added") {
          setData((prev) => {
            return [...prev, { ...change.doc.data(), id: change.doc.id }];
          });
        }
        if (change.type === "modified") {
          setData((prev) => {
            return prev.map((doc) =>
              doc.id === change.doc.id
                ? { ...change.doc.data(), id: change.doc.id }
                : doc
            );
          });
        }
        if (change.type === "removed") {
          setData((prev) => {
            return prev.filter((doc) => doc.id !== change.doc.id);
          });
        }
      });
    });
};

export const getDocsByOrder = (collectionName, setData, orderby, condition) => {
  db.collection(collectionName)
    .orderBy(orderby, condition)
    .onSnapshot(function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type === "added") {
          setData((prev) => {
            return [...prev, { ...change.doc.data(), id: change.doc.id }];
          });
        }
        if (change.type === "modified") {
          setData((prev) => {
            return prev.map((doc) =>
              doc.id === change.doc.id
                ? { ...change.doc.data(), id: change.doc.id }
                : doc
            );
          });
        }
        if (change.type === "removed") {
          setData((prev) => {
            return prev.filter((doc) => doc.id !== change.doc.id);
          });
        }
      });
    });
};

export const getDocsWithFieldName = (
  collectionName,
  setData,
  whereField,
  whereValue
) => {
  db.collection(collectionName)
    .where(whereField, "==", whereValue)
    .onSnapshot(function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type === "added") {
          setData((prev) => {
            return [...prev, { ...change.doc.data(), id: change.doc.id }];
          });
        }
        if (change.type === "modified") {
          setData((prev) => {
            return prev.map((doc) =>
              doc.id === change.doc.id
                ? { ...change.doc.data(), id: change.doc.id }
                : doc
            );
          });
        }
        if (change.type === "removed") {
          setData((prev) => {
            return prev.filter((doc) => doc.id !== change.doc.id);
          });
        }
      });
    });
};
// condation

// ! not use
// export const getUpcoming = async (collectionName, setData) => {
//   try {
//     const week = getWeek();
//     const docsRef = db.collection(collectionName).where("date", "in", week);
//     const docs = await docsRef.get();
//     docs.forEach(function (doc) {
//       // doc.data() is never undefined for query doc snapshots
//       setData((prev) => {
//         return [...prev, { ...doc.data(), id: doc.id }];
//       });
//     });
//   } catch (error) {
//     setData();
//   }
// };

// export const addToArrayDocument = async (collectionName, docName, value) => {
//   try {
//     const docRef = db.collection(collectionName).doc(docName);
//     const doc = await docRef.get();
//     if (doc.exists) {
//       await docRef.update({
//         types: firebase.firestore.FieldValue.arrayUnion(value),
//       });
//     } else {
//       docRef.set({
//         types: [value],
//       });
//     }
//   } catch (error) {
//     return error;
//   }
// };

export const removeFromArrayDocument = async (
  collectionName,
  docName,
  value
) => {
  try {
    const product = db.collection(collectionName).doc(docName);
    await product.update({
      gallery: firebase.storage.FieldValue.arrayRemove(value),
    });
  } catch (error) {
    return error;
  }
};

// // firestore pagination
// export const getDataPagination = async (
//   collectionName,
//   orderBy,
//   filterBy,
//   filterValue,
//   pageSize,
//   setData,
//   setFirst,
//   setLast
// ) => {
//   const docRef = db
//     .collection(collectionName)
//     .orderBy(orderBy)
//     // .where(filterBy, "==", filterValue)
//     .limit(pageSize);
//   await docRef.get().then(function (documentSnapshots) {
//     // get first and last doc
//     // const firstVisible = documentSnapshots.docs[0];
//     setFirst();
//     const lastVisible =
//       documentSnapshots.docs[documentSnapshots.docs.length - 1];
//     setLast(lastVisible);
//     // get data
//     documentSnapshots.forEach(function (doc) {
//       setData((prev) => {
//         return [...prev, { ...doc.data(), id: doc.id }];
//       });
//     });
//   });
// };

// export const nextPage = async (
//   collectionName,
//   orderBy,
//   filterBy,
//   filterValue,
//   pageSize,
//   last,
//   setData,
//   setFirst,
//   setLast
// ) => {
//   const docRef = db
//     .collection(collectionName)
//     .orderBy(orderBy)
//     // .where(filterBy, "==", filterValue)
//     .startAfter(last)
//     .limit(pageSize);
//   await docRef.get().then(function (documentSnapshots) {
//     // get first and last doc
//     const firstVisible = documentSnapshots.docs[0];
//     setFirst(firstVisible);
//     const lastVisible =
//       documentSnapshots.docs[documentSnapshots.docs.length - 1];
//     setLast(lastVisible);
//     // get data
//     documentSnapshots.forEach(function (doc) {
//       setData((prev) => {
//         return [...prev, { ...doc.data(), id: doc.id }];
//       });
//     });
//   });
// };

// export const prevPage = async (
//   collectionName,
//   orderBy,
//   filterBy,
//   filterValue,
//   pageSize,
//   first,
//   setData,
//   setFirst,
//   setLast
// ) => {
//   const docRef = db
//     .collection(collectionName)
//     .orderBy(orderBy)
//     // .where(filterBy, "==", filterValue)
//     .endBefore(first)
//     .limitToLast(pageSize);
//   await docRef.get().then(function (documentSnapshots) {
//     // get first and last doc
//     const firstVisible = documentSnapshots.docs[0];
//     setFirst(firstVisible);
//     const lastVisible =
//       documentSnapshots.docs[documentSnapshots.docs.length - 1];
//     setLast(lastVisible);
//     // get data
//     documentSnapshots.forEach(function (doc) {
//       setData((prev) => {
//         return [...prev, { ...doc.data(), id: doc.id }];
//       });
//     });
//   });
// };
