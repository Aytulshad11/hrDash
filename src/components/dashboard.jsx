import React, { useState } from "react"
import { Bell, Menu, MessageSquare, Search, Star, MoreHorizontal, ChevronUp } from "lucide-react"

import StatsCard from "./Stats"
import cn from "./Utils"
import DashboardSection from "./DashboardSec"
import UpcomingSchedule from "./Schedule"
import Header from "./Header"

import ActivityCard from "./Activity"


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      
      <Header />

      <div className="flex">
        
       
       
        <main className="flex-1 p-4 md:ml-64">
          <div className="container space-y-8 text-left" >
            <h1 className="text-2xl font-bold">Dashboard</h1>

          
            <div className="grid gap-4 md:grid-cols-3">
              
              <div className="md:col-span-2 space-y-4">
              
                <div className="grid gap-4 md:grid-cols-3">
                  <StatsCard
                    title="Available Position"
                    value="24"
                    subtitle="4 Urgently needed"
                    className="bg-red-50"
                  />
                  <StatsCard
                    title="Job Open"
                    value="10"
                    subtitle="4 Active hiring"
                    className="bg-blue-50"
                  />
                  <StatsCard
                    title="New Employees"
                    value="24"
                    subtitle="4 Department"
                    className="bg-purple-50"
                  />
                </div>

                
                <div className="grid gap-4 md:grid-cols-2">
                  <StatsCard
                    title="Total Employees"
                    value="216"
                    trend={{ value: "2%", label: "Past month" }}
                    additionalInfo={{
                      label1: "Men",
                      value1: "120",
                      label2: "Women",
                      value2: "96"
                    }}
                    graphData={[180, 190, 200, 210, 205, 220, 216]}
                  />
                  <StatsCard
                    title="Talent Request"
                    value="16"
                    trend={{ value: "5%", label: "Past month" }}
                    additionalInfo={{
                      label1: "Men",
                      value1: "6",
                      label2: "Women",
                      value2: "10"
                    }}
                    graphData={[10, 12, 15, 14, 18, 16, 16]}
                  />
                </div>

             
                <DashboardSection
                  title="Announcement"
                  date="Today, 13 Sep 2021"
                  items={[
                    {
                      title: "Outing schedule for every department",
                      timestamp: "5 Minutes ago"
                    },
                    {
                      title: "Meeting HR Department",
                      timestamp: "Yesterday, 12:30 PM"
                    },
                    {
                      title: "IT Department need two more talents for UX/UI Designer position",
                      timestamp: "Yesterday, 09:15 AM"
                    }
                  ]}
                  actionLabel="See All Announcement"
                />
              </div>

            
              <div className="">
                <div><ActivityCard
                /> </div>
                <br />
                <DashboardSection
                  title="Upcoming Schedule"
                  date="Today, 13 Sep 2021"
                  items={[
                    {
                      title: "Review candidate applications",
                      time: "Today - 11:30 AM"
                    },
                    {
                      title: "Interview with candidates",
                      time: "Today - 10:30 AM"
                    },
                    {
                      title: "Short meeting with product designer from IT Department",
                      time: "Today - 09:15 AM"
                    }
                  ]}
                  actionLabel="Create a new Schedule"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}