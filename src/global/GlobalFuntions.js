export const handleImageFile = (e, setImageAsFile) => {
  const file = e.target.files[0];
  if (file.size > 1000141) {
    alert("File is too big, file size must be smaller than 1MB.");
    e.target.value = "";
  } else {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const data = {
      file,
      fileName: timestamp,
    };
    setImageAsFile(data);
  }
};

export const multipleImagesFile = (e, index, oldFileName, setMultiImg) => {
  const file = e.target.files[0];
  if (file.size > 1000141) {
    alert("File is too big, file size must be smaller than 1MB.");
    e.target.value = "";
  } else {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const data = {
      file,
      fileName: timestamp,
      index,
      oldFileName,
    };
    setMultiImg((prev) => {
      const oldData = prev.filter((old) => old.index !== index);
      return [...oldData, { ...data }];
    });
  }
};
