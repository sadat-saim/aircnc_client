import React from "react";
import { Card } from "flowbite-react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Star from "../Star/Star";

const CardItem = ({ hotel, country }) => {
  const {
    name,
    picture,
    price,
    review,
    details,
    country: experienceCountry,
  } = hotel;

  return (
    <Card imgSrc={picture}>
      <h5 className="text-xl font-bold tracking-tight -my-3 text-gray-900 dark:text-white">
        {country ? experienceCountry : name}
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {details.slice(0, 33)}...
      </p>
      <p className="text-gray-400 text-sm -mt-3">${price} per person</p>
      <p className="flex items-center justify-between -my-3">
        <span className="flex">
          {Array.from({ length: Math.floor(review) }).map((_, i) => (
            <Star key={i}></Star>
          ))}
        </span>
        <ArrowLongRightIcon className="h-6 w-6 text-lime-300 cursor-pointer" />
      </p>
    </Card>
  );
};

export default CardItem;
