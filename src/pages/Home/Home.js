import React, { useEffect, useState } from "react";
import { Sidebar, Button } from "flowbite-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useLoaderData } from "react-router-dom";
import CardItem from "../common/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const Home = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [homes, setHomesData] = useState(null);
  const data = useLoaderData();
  const breakpoints = {
    // when window width is >= 576px
    576: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      spaceBetween: 10,
      slidesPerView: 3,
    },
    1280: {
      slidesPerGroup: 2,
      slidesPerView: 4,
    },
  };

  useEffect(() => {
    fetch("homes.json")
      .then((res) => res.json())
      .then((data) => setHomesData(data))
      .catch((err) => console.error(err));
  }, []);

  SwiperCore.use([Autoplay]);

  const handleAdultCount = (num) => {
    setAdultCount((prev) => (prev + num < 0 ? 0 : prev + num));
  };
  const handleChildCount = (num) => {
    setChildCount((prev) => (prev + num < 0 ? 0 : prev + num));
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <Sidebar
        aria-label="sidebar"
        className="w-full md:sticky top-0 md:h-screen"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item className=" text-xl hover:bg-transparent">
              <span className="font-semibold">Where do you want to go?</span>
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
      <div className="col-span-1 lg:col-span-2 mb-6 mx-3">
        <div>
          <h3 className="font-semibold text-xl mt-6 mb-4">Experiences</h3>
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            loop
            breakpoints={breakpoints}
          >
            {data?.map((hotel) => (
              <SwiperSlide key={hotel._id}>
                <CardItem hotel={hotel} country={true}></CardItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <h3 className="font-semibold text-xl mt-6 mb-4">Homes</h3>
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            loop
            breakpoints={breakpoints}
          >
            {homes?.map((hotel) => (
              <SwiperSlide key={hotel._id}>
                <CardItem hotel={hotel}></CardItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
