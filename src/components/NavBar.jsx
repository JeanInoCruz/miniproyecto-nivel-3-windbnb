import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Input from "./Input";
import Button from "./Button";

const NavBar = ({ openModal, closeModal, guests }) => {
  return (
    <nav className="mt-5 flex sm:flex-row sm:gap-0 gap-5 flex-col justify-between sm:items-center font-mulish">
      <div className="self-start sm:self-center">
        <img src={logo} alt="windbnb" />
      </div>
      <form
        className="flex sm:items-center"
        onSubmit={(e) => {
          e.preventDefault();
          openModal();
        }}
      >
        <Input
          type="text"
          name="location"
          id="location"
          readOnly
          placeholder="Add location"
          className="sm:px-5 sm:py-3 px-3 py-2 border rounded-l-xl border-gray2 shadow-cu w-5/12 sm:w-auto"
          onClick={() => openModal()}
        />
        <Input
          type="text"
          name="guests"
          id="guests"
          value={guests > 0 ? `${guests} guests` : ""}
          placeholder="Add guests"
          className="sm:px-5 sm:py-3 px-4 py-2 border border-gray2 shadow-cu w-5/12 sm:w-auto"
          readOnly
          onClick={() => openModal()}
        />
        <Button
          type="submit"
          onClick={() => closeModal()}
          className="flex items-center border rounded-r-xl border-gray2 sm:px-4 sm:py-3 px-3 py-2"
        >
          <span className="material-symbols-outlined text-darkOrange">
            search
          </span>
        </Button>
      </form>
    </nav>
  );
};

export default NavBar;
