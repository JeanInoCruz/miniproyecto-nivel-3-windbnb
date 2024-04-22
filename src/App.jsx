// App.jsx
import React, { useState } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import staysData from "./data/stays.json";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filteredStays, setFilteredStays] = useState(staysData);
  const [guests, setGuests] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const openModal = () => {
    console.log("openModal called");
    setMounted(true);
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("closeModal called");
    setMounted(false);
    setModalOpen(false);
  };

  const filterStays = (location, sum) => {
    console.log("filterStays called");
    let filtered = staysData;
    const rs = location.trim().split(',')[0].trim();
    if (location) {
      filtered = filtered.filter(
        (stay) => stay.city.toLowerCase() === rs.toLowerCase()
      );
    }
    if (sum > 0) {
      filtered = filtered.filter((stay) => stay.maxGuests >= sum);
    }
    setFilteredStays(filtered);
    setGuests(sum);
    setSelectedCity(rs);
  };

  return (
    <div className="xl:container xl:mx-auto md:px-8 px-5">
      <Nav openModal={openModal} closeModal={closeModal} guests={guests} selectedCity={selectedCity} />
      <CardContainer filteredStays={filteredStays} />
      <Footer />
      {modalOpen && (
        <Modal
          closeModal={closeModal}
          filterStays={filterStays}
          onSelectCity={setSelectedCity}
          mounted={mounted}
        />
      )}
    </div>
  );
}

export default App;