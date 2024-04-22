import React, { useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import staysData from "./data/stays.json";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filteredStays, setFilteredStays] = useState(staysData);
  const [guests, setGuests] = useState(0);

  const openModal = () => {
    console.log("openModal called");
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("closeModal called");
    setModalOpen(false);
  };

  const filterStays = (location, sum) => {
    console.log("filterStays called");
    let filtered = staysData;
    if (location) {
      filtered = filtered.filter(
        (stay) => stay.city.toLowerCase() === location.toLowerCase()
      );
    }
    if (sum > 0) {
      filtered = filtered.filter((stay) => stay.maxGuests >= sum);
    }
    setFilteredStays(filtered);
    setGuests(sum);
  };

  return (
    <div className="xl:container xl:mx-auto md:px-8 px-5">
      {modalOpen && (
        <Modal
          closeModal={closeModal}
          filterStays={filterStays}
          setGuests={setGuests}
        />
      )}
      <NavBar openModal={openModal} closeModal={closeModal} guests={guests} />
      <Main filteredStays={filteredStays} />
      <Footer />
    </div>
  );
}

export default App;
