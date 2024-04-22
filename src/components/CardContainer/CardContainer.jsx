import React from "react";
import Card from "../Card/Card";

const CardContainer = ({ filteredStays, selectedLocation }) => {
  let content = "";

  if (filteredStays.length === 0) {
    content = (
      <div className="flex flex-col items-center col-span-3 font-montserrat gap-3 mt-5">
        <h1 className="text-3xl font-bold text-black1">Sorry!</h1>
        <h2>
          It looks like we couldn't find any search results that match your
          filters.
        </h2>
      </div>
    );
  } else {
    content = filteredStays.map((stay, index) => (
      <Card
        key={index}
        title={stay.title}
        rating={stay.rating}
        type={stay.type}
        photo={stay.photo}
        superHost={stay.superHost}
      />
    ));
  }

  return (
    <main className="mt-10">
      <div className="flex items-center justify-between font-montserrat mb-7">
        <h1 className="font-bold text-black1 text-2xl">
          Stays in {selectedLocation ? selectedLocation : "Finland"}
        </h1>
        <h2 className="text-base">{filteredStays.length} stays</h2>
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-9 lg:gap-6 md:gap-7 gap-10">
        {content}
      </section>
    </main>
  );
};

export default CardContainer;
