"use client";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const PageButton = () => {
  const notifySuccess = () => {
    toast.success("Operacja zakończona sukcesem!");
  };

  return (
    <div className="flex flex-col gap-5 mt-10 p-4">
      <div>
        <button onClick={notifySuccess} className="underline">
          Kliknij mnie!
        </button>
      </div>
      <div>
        <Link href="https://gallery-mu-lyart.vercel.app/" target="_blank">
          Helper
        </Link>
      </div>
      <div>
        <Link href="https://codepen.io/" target="_blank">
          Codepen
        </Link>
      </div>
    </div>
  );
};

export default PageButton;
