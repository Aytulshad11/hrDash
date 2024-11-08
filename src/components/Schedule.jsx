import React, { useState } from "react"
import { Bell, Menu, MessageSquare, Search, Star, MoreHorizontal, ChevronUp } from "lucide-react"
import cn from "./Utils"



function UpcomingSchedule({ date, items }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
        <h3 className="text-base font-semibold">Upcoming Schedule</h3>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.time}</p>
              </div>
              <button className="rounded-full p-1 hover:bg-accent hover:text-accent-foreground">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full rounded-md px-4 py-2 text-sm font-medium text-primary underline-offset-4 hover:underline">
          Create a New Schedule
        </button>
      </div>
    </div>
  )
}
  export default UpcomingSchedule;