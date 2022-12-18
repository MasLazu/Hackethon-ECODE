import { useEffect } from "react";
import Image from "next/image";

import CardMenu from "./CardMenu";

import triangle from "../../assets/triangle.svg";
import triangleGray from "../../assets/triangle-gray.svg";

export default function ExpoloreMenu() {
  useEffect(() => {
    handleNavigation();
  }, []);
  let menuActive = "breakfast";

  const handleNavigation = () => {
    const selected = document.getElementById(menuActive);
    const allMenu = document.querySelectorAll(".cardMenu");
    allMenu.forEach((e) => {
      e.childNodes[0].classList.remove("bg-accent");
      e.childNodes[0].classList.add("bg-[#ebebeb]");
      e.childNodes[1].classList.remove("text-accent");
      e.childNodes[1].classList.add("text-[#979797]");
    });
    selected.querySelector(".scroll-bar").classList.remove("bg-[#ebebeb]");
    selected.querySelector(".scroll-bar").classList.add("bg-accent");
    selected.querySelector(".button").classList.remove("text-[#979797]");
    selected.querySelector(".button").classList.add("text-accent");
  };

  return (
    <div className="explore-our-menu grid md:grid-cols-12">
      <div className="navigation hidden md:block lg:col-span-3 md:col-span-2">
        <div className="cardMenu flex" id="breakfast">
          <div className="scroll-bar px-[2px] lg:py-8 py-6 bg-[#ebebeb] rounded-t-full"></div>
          <button
            className="button lg:text-xl text-lg lg:ml-5 ml-2 px-3 text-[#979797]"
            onClick={() => {
              menuActive = "breakfast";
              handleNavigation();
            }}
          >
            Breakfast
          </button>
        </div>
        <div className="cardMenu flex" id="Lounch">
          <div className="scroll-bar px-[2px] lg:py-8 py-6 bg-[#ebebeb]"></div>
          <button
            className="button lg:text-xl text-lg lg:ml-5 ml-2 px-3 text-[#979797]"
            onClick={() => {
              menuActive = "Lounch";
              handleNavigation();
            }}
          >
            Lounch
          </button>
        </div>
        <div className="cardMenu flex" id="Dinner">
          <div className="scroll-bar px-[2px] lg:py-8 py-6 bg-[#ebebeb]"></div>
          <button
            className="button lg:text-xl text-lg lg:ml-5 ml-2 px-3 text-[#979797]"
            onClick={() => {
              menuActive = "Dinner";
              handleNavigation();
            }}
          >
            Dinner
          </button>
        </div>
        <div className="cardMenu flex" id="Desert">
          <div className="scroll-bar px-[2px] lg:py-8 py-6 bg-[#ebebeb]"></div>
          <button
            className="button lg:text-xl text-lg lg:ml-5 ml-2 px-3 text-[#979797]"
            onClick={() => {
              menuActive = "Desert";
              handleNavigation();
            }}
          >
            Desert
          </button>
        </div>
        <div className="cardMenu flex" id="Soup">
          <div className="scroll-bar px-[2px] lg:py-8 py-6 bg-[#ebebeb]"></div>
          <button
            className="button lg:text-xl text-lg lg:ml-5 ml-2 px-3 text-[#979797]"
            onClick={() => {
              menuActive = "Soup";
              handleNavigation();
            }}
          >
            Soup
          </button>
        </div>
        <div className="cardMenu flex" id="Drinks">
          <div className="scroll-bar px-[2px] lg:py-8 py-6 bg-[#ebebeb] rounded-b-full"></div>
          <button
            className="button lg:text-xl text-lg lg:ml-5 ml-2 px-3 text-[#979797]"
            onClick={() => {
              menuActive = "Drinks";
              handleNavigation();
            }}
          >
            Drinks
          </button>
        </div>
      </div>
      <div className="wraper-menu lg:col-span-9 md:col-span-10 grid md:grid-cols-3">
        <CardMenu
          image={"/assets/Salmon.png"}
          caption={"Salmon Steak"}
          rating={5}
          active={false}
        />
        <CardMenu
          image={"/assets/Chicken.png"}
          caption={"Grill Chicken BBQ"}
          rating={4}
          active={true}
        />
        <CardMenu
          image={"/assets/Spinach.png"}
          caption={"Spinach Sandwich"}
          rating={3}
          active={false}
        />
      </div>
      <div className="next-prev-wraper col-span-12 flex justify-end lg:mt-9 mt-9 md:mt-5 px-3">
        <button className="py-3 px-5 rounded-l-full rounded-r-lg shadow-lg mr-2 active:brightness-90">
          <Image
            src={triangleGray}
            width={100}
            height={100}
            className="lg:h-8 h-8 md:h-6 lg:w-8 w-8 md:w-6 rotate-180"
          />
        </button>
        <button className="ml-2 py-3 px-5 rounded-r-full rounded-l-lg shadow-lg bg-main active:brightness-90">
          <Image
            src={triangle}
            width={100}
            height={100}
            className="lg:h-8 h-8 md:h-6 lg:w-8 w-8 md:w-6"
          />
        </button>
      </div>
    </div>
  );
}
