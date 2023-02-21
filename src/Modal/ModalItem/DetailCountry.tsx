import React, { memo } from "react";
import "remixicon/fonts/remixicon.css";
type countryData = {
  country: string;
  total: number;
  death: number;
  recovered: number;
  setVisible: (value: boolean | ((prevVisible: boolean) => boolean)) => void;
};
const DetailCountry = ({
  country,
  total,
  recovered,
  death,
  setVisible,
}: countryData) => {
  return (
    <div className="bg-white h-[300px] w-[400px] rounded-xl flex flex-col items-center p-4">
      <h1 className="font-bold text-2xl py-4">{country}</h1>
      <div className="flex justify-between w-full text-gray-600  mb-4">
        <div className="flex items-center">
          <i className="ri-heart-pulse-fill text-2xl mr-4"></i>
          <h1>Total Confirmed</h1>
        </div>
        <h1>{total}</h1>
      </div>
      <div className="flex justify-between w-full text-gray-600 mb-4 ">
        <div className="flex items-center">
          <i className="ri-skull-fill text-2xl mr-4"></i>
          <h1>Total Deaths</h1>
        </div>
        <h1>{death}</h1>
      </div>
      <div className="flex justify-between w-full text-gray-600  mb-4 ">
        <div className="flex items-center">
          <i className="ri-heart-add-fill text-2xl mr-4"></i>
          <h1>Total Recovered</h1>
        </div>
        <h1>{recovered}</h1>
      </div>
      <button
        className="bg-blue-400 px-12 rounded-xl py-2 font-bold text-white hover:bg-blue-500"
        onClick={() => setVisible(false)}
      >
        Ok
      </button>
    </div>
  );
};

export default memo(DetailCountry);
