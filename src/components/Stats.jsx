import React, { useState } from "react"
import { Bell, Menu, MessageSquare, Search, Star, MoreHorizontal, ChevronUp } from "lucide-react"
import cn from "./Utils"

function StatsCard({ title, value, subtitle, className, trend, additionalInfo, graphData }) {
  return (
    <div className={cn("overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
      <div className="p-6">
        <div className="space-y-2">
          <h3 className="text-base font-medium text-muted-foreground">{title}</h3>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-3xl font-bold">{value}</p>
              {subtitle && (
                <p className="text-sm text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
            {trend && (
              <div className="flex items-center gap-1 text-sm text-emerald-500">
                <ChevronUp className="h-4 w-4" />
                <span>+{trend.value}</span>
                <span className="text-muted-foreground">{trend.label}</span>
              </div>
            )}
          </div>
          {additionalInfo && (
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <div>
                <p>{additionalInfo.value1} {additionalInfo.label1}</p>
              </div>
              <div>
                <p>{additionalInfo.value2} {additionalInfo.label2}</p>
              </div>
            </div>
          )}
          {graphData && (
            <div className="mt-4 h-[100px]">
              <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d={`M 0 ${100 - (graphData[0] / Math.max(...graphData)) * 100} ${graphData.map((d, i) => `L ${(i / (graphData.length - 1)) * 300} ${100 - (d / Math.max(...graphData)) * 100}`).join(' ')}`}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
                {graphData.map((d, i) => (
                  <circle
                    key={i}
                    cx={(i / (graphData.length - 1)) * 300}
                    cy={100 - (d / Math.max(...graphData)) * 100}
                    r="3"
                    fill="hsl(var(--primary))"
                  />
                ))}
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default StatsCard;