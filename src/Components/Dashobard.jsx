"use client"

import React, { useEffect, useState } from "react"
import {
  FaUser,
  FaBriefcase,
  FaClipboardList,
  FaBell,
  FaBuilding,
  FaListAlt,
  FaPlusCircle,
  FaBars,
} from "react-icons/fa"
import { useDashboard } from "../context/context.js"
import { useProfile } from "../context/ProfileContext.js"
import JobPortalProfilePage from "./ProfilePage"
import Analytics from "./Analytics"
import CompanyProfile from "./CompanyProfile"
import RecentJobPostings from "./RecentJobPostings"
import PostJob from "./PostJob"
import EditJob from "./EditJob.jsx"
import CodeEditor from "./codingEnv/CodeEditor.jsx"
import BlogUpload from "./BlogUpload.jsx"

export default function Dashboard() {
  const { activeSection, setActiveSection } = useDashboard()
  const { userType } = useProfile()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const userT = userType || "employee"

  useEffect(() => {
    if (!activeSection) {
      setActiveSection(userT === "employee" ? "Profile" : "CompanyProfile")
    }
  }, [activeSection, userT, setActiveSection])

  const renderSection = () => {
    if (userT === "employee") {
      switch (activeSection) {
        case "Profile":
          return <JobPortalProfilePage />
        case "MyJobs":
          return <Analytics />
        case "Applications":
          return <CodeEditor />
        case "Notifications":
          return <div>Notifications</div>
        case "BlogUpload":
          return <BlogUpload />
        default:
          return <JobPortalProfilePage />
      }
    } else if (userT === "company") {
      switch (activeSection) {
        case "CompanyProfile":
          return <CompanyProfile />
        case "RecentJobPostings":
          return <RecentJobPostings Title="Recent Job Posting" type="Close the postion" />
        case "PostJob":
          return <PostJob />
        case "EditJob":
          return <EditJob />
        case "Applications":
          return <CodeEditor />
        case "Draft":
          return <RecentJobPostings Title="Jobs in Draft" type="Post Job" />
        default:
          return <CompanyProfile />
      }
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const SidebarContent = () => (
    <ul className="space-y-2">
      {userT === "employee" ? (
        <>
          <SidebarItem icon={FaUser} label="Profile" section="Profile" />
          <SidebarItem icon={FaBriefcase} label="My Jobs" section="MyJobs" />
          <SidebarItem icon={FaClipboardList} label="Applications" section="Applications" />
          <SidebarItem icon={FaBell} label="Notifications" section="Notifications" />
          <SidebarItem icon={FaPlusCircle} label="Blog Upload" section="BlogUpload" />
        </>
      ) : (
        <>
          <SidebarItem icon={FaBuilding} label="Company Profile" section="CompanyProfile" />
          <SidebarItem icon={FaListAlt} label="Recent Job Postings" section="RecentJobPostings" />
          <SidebarItem icon={FaPlusCircle} label="Post a Job" section="PostJob" />
          <SidebarItem icon={FaClipboardList} label="Applications" section="Applications" />
          <SidebarItem icon={FaListAlt} label="Jobs in Draft" section="Draft" />
        </>
      )}
    </ul>
  )

  const SidebarItem = ({ icon: Icon, label, section }) => (
    <li
      className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer rounded-lg transition-colors duration-200 ${
        activeSection === section ? "bg-blue-100" : ""
      }`}
      onClick={() => {
        setActiveSection(section)
        setIsSidebarOpen(false)
      }}
      aria-current={activeSection === section ? "page" : undefined}
    >
      <Icon className="mr-2" />
      <span>{label}</span>
    </li>
  )

  return (
    <div className="min-h-screen bg-gray-100 pt-20 flex flex-col md:flex-row">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden bg-white p-4 shadow-md">
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-white shadow-md transition-all duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">{renderSection()}</div>
      </div>
    </div>
  )
}