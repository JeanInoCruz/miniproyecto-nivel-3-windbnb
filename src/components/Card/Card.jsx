import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col font-montserrat">
      <div>
        <img
          src={props.photo}
          className="rounded-3xl lg:w-[395px] lg:h-[269px] md:w-[450px] md:h-[300px] object-cover"
          alt={props.title}
        />
      </div>
      <div className="flex mt-4 items-center gap-3 sm:mb-2 mb-2">
        {props.superHost && (
          <p className="uppercase border text-xs border-gray3 rounded-2xl px-3 py-[0.45rem] text-gray3 font-bold">
            Super Host
          </p>
        )}

        <p className="font-medium text-gray4 text-sm">{props.type}</p>
        <div className="flex gap-1 ms-auto px-4">
          <span className="material-symbols-rounded text-darkOrange">star</span>
          <p className="mt-[0.12rem]">{props.rating}</p>
        </div>
      </div>
      <p className="text-base font-semibold text-black1">{props.title}</p>
    </div>
  );
};

export default Card;
