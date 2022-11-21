import { Badge, Button } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Star from "../common/Star/Star";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import icon from "./marker-icon.png";
import { Icon } from "leaflet";
import useScroll from "../../utils/useScroll";

const myIcon = new Icon({
  iconUrl: icon,
  iconSize: [32, 50],
});

const ServiceDetails = () => {
  const data = useLoaderData();
  const {
    country,
    details,
    name,
    picture,
    phone,
    email,
    review,
    price,
    baths,
    bedrooms,
    guests,
    latitude,
    longitude,
  } = data;
  const position = [Math.ceil(latitude), Math.ceil(longitude)];
  console.log(data);

  useScroll();

  return (
    <div className="container mx-auto px-3 md:px-0">
      <h1 className="text-3xl font-bold my-3">
        {name}-{country}
      </h1>
      <p className="flex">
        <Badge color="success">{country}</Badge>
        <Badge color="info" className="mx-2">
          Price: ${price}
        </Badge>
        <span className=" flex items-end pb-1">
          {Array.from({ length: Math.floor(review) })?.map((_, i) => (
            <Star key={i}></Star>
          ))}
        </span>
      </p>
      <PhotoProvider>
        <PhotoView src={picture}>
          <img
            src={picture}
            alt={name}
            className="my-3 w-full h-[50vh] rounded-lg object-cover"
          />
        </PhotoView>
      </PhotoProvider>
      <small className="block text-indigo-500 -mt-1">
        Click the image to view full image
      </small>
      <h1 className="text-3xl font-bold my-3">
        Entire vila is located in{" "}
        <span className="text-lime-400">{country}</span>
      </h1>
      <p className="text-xl -mt-2">
        {bedrooms} bedrooms, {guests} guests, {baths} baths
      </p>
      <hr className="my-4" />
      <p className="text-lg">{details}</p>
      <Button
        size="lg"
        className="bg-gradient-to-r from-lime-400 block to-green-300 mt-4 px-6"
      >
        Book Now
      </Button>
      <div>
        <h2 className="text-3xl font-bold my-3">Contact</h2>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <div className="my-3">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={myIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
