import React, { useState } from "react";
import { Sidebar, Button } from "flowbite-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const handleAdultCount = (num) => {
    setAdultCount((prev) => (prev + num < 0 ? 0 : prev + num));
  };
  const handleChildCount = (num) => {
    setChildCount((prev) => (prev + num < 0 ? 0 : prev + num));
  };

  return (
    <div className="container mx-auto">
      <Sidebar aria-label="sidebar" className="w-1/3">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item className="font-semibold text-xl hover:bg-transparent">
              Where do you want to go?
            </Sidebar.Item>
            <Sidebar.Item className="hover:bg-transparent border-2 border-gray-100">
              <h3 className="font-semibold">Location</h3>
              <input
                type="text"
                name="place"
                placeholder="Add city, landmark, area"
                className="w-full border-0 border-b-[1px] border-transparent outline-0 focus:ring-transparent focus:border-b-[1px] focus:border-black"
              />
            </Sidebar.Item>
            <Sidebar.Item className="hover:bg-transparent border-2 border-gray-100">
              <div className="grid grid-cols-2">
                <div className="border-r-2 border-gray-100">
                  <h3 className="font-semibold">Arrival</h3>
                  <input
                    type="date"
                    name="arrivalDate"
                    placeholder="Add city, landmark, area"
                    className="w-full border-0 outline-0 focus:ring-transparent "
                  />
                </div>
                <div className="pl-4">
                  <h3 className="font-semibold">Departure</h3>
                  <input
                    type="date"
                    name="departureDate"
                    placeholder="Add city, landmark, area"
                    className="w-full border-0 outline-0 focus:ring-transparent "
                  />
                </div>
              </div>
            </Sidebar.Item>
            <Sidebar.Item className="hover:bg-transparent border-2 border-gray-100">
              <div className="border-b-[1px] border-gray-300 pb-6">
                <h3 className="font-semibold">Guests</h3>
                <p className="font-bold mt-3">
                  {adultCount} Adult {childCount} Child
                </p>
              </div>
              <div>
                <div className="flex justify-between mt-3">
                  <p className="font-semibold">ADULTS</p>
                  <span>
                    <button
                      onClick={() => handleAdultCount(-1)}
                      className="font-bold px-3 text-xl"
                    >
                      -
                    </button>
                    <button className="font-bold px-3 text-xl">
                      {adultCount}
                    </button>

                    <button
                      className="font-bold px-3 text-xl"
                      onClick={() => handleAdultCount(1)}
                    >
                      +
                    </button>
                  </span>
                </div>
                <div className="flex justify-between mt-3">
                  <p className="font-semibold">CHILD</p>
                  <span>
                    <button
                      onClick={() => handleChildCount(-1)}
                      className="font-bold px-3 text-xl"
                    >
                      -
                    </button>
                    <button className="font-bold px-3 text-xl">
                      {adultCount}
                    </button>

                    <button
                      className="font-bold px-3 text-xl"
                      onClick={() => handleChildCount(1)}
                    >
                      +
                    </button>
                  </span>
                </div>
                <Button className="bg-gradient-to-r from-lime-400 to-green-300 w-full mt-6">
                  <MagnifyingGlassIcon className="w-5 h-5 mr-2 text-white"></MagnifyingGlassIcon>
                  Search
                </Button>
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Home;
