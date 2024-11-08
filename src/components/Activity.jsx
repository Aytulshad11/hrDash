
import React from "react";
function ActivityCard() {
    return (
      <div className="bg-gray-800 text-white p-6 sm:p-4 rounded-lg w-full">
        <h2 className="text-xl font-bold mb-4 text-left sm:text-lg">Recently Activity</h2>
        
        <p className="text-sm mb-2 text-left">10:40 AM, Fri 10 Sept 2021</p>
        
        <h3 className="text-lg font-bold mb-2 text-left sm:text-base">You Posted a New Job</h3>
        
        <p className="text-sm mb-4 text-left sm:mb-2">
          Kindly check the requirements and terms of work and make sure everything is right.
        </p>
        
        <div className="flex justify-between items-center text-left w-full">
          <p className="text-sm sm:text-xs">Today you made 12 Activities</p>
          
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm sm:py-1 sm:px-3">
            See All Activity
          </button>
        </div>
      </div>
    );
  }
  
  export default ActivityCard;
  