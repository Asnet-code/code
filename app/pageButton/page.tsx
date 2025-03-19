"use client";
import React from "react";
import { toast } from "react-toastify";

const PageButton = () => {
  const notifySuccess = () => {
    toast.success("Operacja zakończona sukcesem!");
  };

  return (
    <div>
      <button onClick={notifySuccess}>Kliknij mnie!</button>
    </div>
  );
};

export default PageButton;
