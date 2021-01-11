import React from "react";
import { toast } from "react-toastify";

export const toastSuccess = (title) => {
  return toast.success(
    <>
      <i className="fas fa-check pr-2"></i>
      {title}
    </>,
    {
      position: "top-right",
      autoClose: 1700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    }
  );
};

export const toastWarn = (title) => {
  return toast.warn(
    <>
      <i className="fas fa-exclamation-circle pr-2"></i>
      {title}
    </>,
    {
      position: "top-right",
      autoClose: 1700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    }
  );
};

export const toastError = (title) => {
  return toast.error(
    <>
      <i className="fas fa-times pr-2"></i>
      {title}
    </>,
    {
      position: "top-right",
      autoClose: 1700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    }
  );
};
