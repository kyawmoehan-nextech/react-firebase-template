import { storageRef } from "./firebaseInit";

export const fileUploadToStorage = async (fileData, pathName) => {
  try {
    const fileRef = await storageRef.child(`${pathName}/${fileData.fileName}`);
    const uploadTask = await fileRef.put(fileData.file);
    const downloadUrl = await uploadTask.ref.getDownloadURL();
    return downloadUrl;
  } catch (error) {
    throw new Error("File Upload error!");
  }
};

export const fileDeleteFormStorage = async (fileName, pathName) => {
  try {
    var desertRef = await storageRef.child(`${pathName}/${fileName}`);
    await desertRef.delete();
    return;
  } catch (error) {
    throw new Error("File Delete error!");
  }
};
