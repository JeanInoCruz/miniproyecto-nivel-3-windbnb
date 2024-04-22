import React, { Fragment, useEffect, useState } from "react";
import Drawer from "./Drawer";
import { createPortal } from "react-dom";

const Modal = ({ filterStays, closeModal }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  console.log("Modal rendered");

  if (!mounted) return null;

  return (
    <Fragment>
      {createPortal(<Backdrop closeModal={closeModal} />, document.getElementById("backdrop"))}
      {createPortal(<Drawer filterStays={filterStays} closeModal={closeModal} />, document.getElementById("modal"))}
    </Fragment>
  );
};

const Backdrop = ({ closeModal }) => {
  console.log("Backdrop rendered");
  return (
    <div
      className="fixed bg-[#00000080] min-h-screen w-full top-0 left-0 z-10"
      onClick={() => closeModal()}
    ></div>
  );
};
export default Modal;
