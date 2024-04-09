import React from "react";
export const HNav = () => {


    return (
        <div className="w-full h-fit bg-white divide-y divide-slate-300">
            <div className="p-[15px] flex justify-between">
                <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" id="menu-btn" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
                
                </div>
            </div>
            <div className="flex justify-between p-[15px]">
                <p id="page-name" className="font-bold text-base">DASHBOARD</p>
                <p id="page-link" className="font-light text-sm">Dashboard {" > "} Project</p>
            </div>
        </div>
    );
};
