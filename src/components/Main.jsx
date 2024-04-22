import React, { useEffect, useState } from "react";
import Card from "./Card";

const Main = ({ filteredStays }) => {
  const [stays, setStays] = useState({
    fetchStatus: "loading",
    filteredStaysList: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../src/data/stays.json");
        const data = await response.json();
        setStays({ fetchStatus: "success", filteredStaysList: data });
      } catch (error) {
        setStays({ fetchStatus: "error", filteredStaysList: [] });
      }
    };

    fetchData();
  }, []);

  let content = "";

  if (stays.fetchStatus === "loading") {
    content = <p className="text-lg font-mulish">Loading...</p>;
  } else if (stays.fetchStatus === "error") {
    content = (
      <div className="flex flex-col items-center col-span-3 font-montserrat gap-3 mt-5">
        <h1 className="text-3xl font-bold text-black1">Oops!</h1>
        <h2>There was an error fetching data.</h2>
      </div>
    );
  } else {
    if (stays.filteredStaysList.length === 0) {
      content = (
        <div className="flex flex-col items-center col-span-3 font-montserrat gap-3 mt-5">
          <h1 className="text-3xl font-bold text-black1">Oops!</h1>
          <h2>
            It looks like we couldn't find any search results that match your
            filters.
          </h2>
        </div>
      );
    } else {
      content = stays.filteredStaysList.map((data, index) => (
        <Card
          title={data.title}
          rating={data.rating}
          type={data.type}
          photo={data.photo}
          superHost={data.superHost}
          key={index}
        />
      ));
    }
  }

  return (
    <main className="mt-10">
    <div className="flex items-center justify-between font-montserrat mb-7">
      <h1 className="font-bold text-black1 text-2xl">Stays in Finland</h1>
      <h2 className="text-base">{filteredStays.length} stays</h2>
    </div>
    <section className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-9 lg:gap-6 md:gap-7 gap-10">
      {filteredStays.map((stay, index) => (
        <Card
          key={index}
          title={stay.title}
          rating={stay.rating}
          type={stay.type}
          photo={stay.photo}
          superHost={stay.superHost}
        />
      ))}
    </section>
  </main>
);
};
export default Main;
