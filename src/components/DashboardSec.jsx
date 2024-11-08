import React, { useState } from "react"
import { Bell, Menu, MessageSquare, Search, Star, MoreHorizontal, ChevronUp } from "lucide-react"
import cn from "./Utils"

function DashboardSection({ title, date, items, actionLabel, variant = "default" }) {
  return (
    <div className={cn(
      "rounded-lg border shadow-sm", 
      variant === "activity" 
        ? "bg-primary text-primary-foreground h-full flex flex-col" 
        : "bg-card text-card-foreground"
    )}>
      <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
        <h3 className="text-base font-semibold">{title}</h3>
        {date && <span className="text-sm text-muted-foreground">{date}</span>}
      </div>
      <div className="p-6 pt-0 flex-grow">
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.timestamp}</p>
                {item.description && (
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {variant === "default" && <Star className="h-4 w-4" />}
                <button className="rounded-full p-1 hover:bg-accent hover:text-accent-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className={cn(
          "mt-auto w-full rounded-md px-4 py-2 text-sm font-medium", 
          variant === "activity" 
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" 
            : "text-primary underline-offset-4 hover:underline"
        )}
      >
        {actionLabel}
      </button>
    </div>
  )
}
  export default DashboardSection;