import React, { Fragment, useEffect, useState } from "react";
import ItemSearch from "../ItemSearch/ItemSearch";
import { createPortal } from "react-dom";

const Modal = ({ filterStays, closeModal, onSelectCity }) => {
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
      {createPortal(
        <ItemSearch
          filterStays={filterStays}
          closeModal={closeModal}
          onSelectCity={onSelectCity}
        />,
        document.getElementById("modal")
      )}
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
