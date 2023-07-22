import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t-2 flex ">
      <div className="lg:w-[66.66%] dark:text-zinc-400 p-5 w-[80%] mx-auto flex flex-col gap-7 items-center">
        <div className="flex lg:flex-row gap-7 lg:gap-0 flex-col justify-between items-center w-full" >
          <h3 className="text-xl font-semibold">TrendWave</h3>
          <ul className="flex lg:flex-row text-center flex-col gap-2 lg:gap-5 text-sm">
            <li className="cursor-pointer">Support Center</li>
            <li className="cursor-pointer">Invoicing</li>
            <li className="cursor-pointer">Contract</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">FAQ,s</li>
          </ul>
        </div>
        <p className="text-xs text-center">Copyright © 2022 TrendWave . All Rights Reseved.</p>
      </div>
    </div>
  );
};

export default Footer;
