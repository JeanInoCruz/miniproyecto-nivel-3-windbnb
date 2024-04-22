import React, { Fragment, useEffect, useState } from "react";
import ItemSearch from "../ItemSearch/ItemSearch";

const Modal = ({ filterStays, closeModal, onSelectCity }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  console.log("Modal rendered");

  const modalStyle = {
    display: mounted ? "block" : "none",
    
  };

  return (
    <Fragment>
      <div className="backdrop" style={modalStyle}>
        <div
          className="fixed bg-[#00000085] min-h-screen w-full top-0 left-0 z-10"
          onClick={() => closeModal()}
        ></div>
        <ItemSearch
          filterStays={filterStays}
          closeModal={closeModal}
          onSelectCity={onSelectCity}
        />
      </div>
    </Fragment>
  );
};

export default Modal;