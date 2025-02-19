import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemText, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header"; // Adjust paths as necessary
import FAQS from "./FAQS"; // Adjust paths as necessary
import OurTeam from "./OurTeam";
import WhyBrainBank from "./WhyBrainBank";
import axios from "axios";

const Dashboard = () => {
  const [count, setcount] = useState()
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const navigate = useNavigate();

useEffect(() => {
  const fetchData= async()=>{
    const response= await axios.get(`${import.meta.env.VITE_SERVER_URL}faq/count`)
    // console.log("resss",response.data.totalFaqs)
    setcount(response.data.totalFaqs)
  }
  fetchData()
}, [])


  // Handle navigation on menu item click
  const handleMenuClick = (component) => {
    setSelectedComponent(component);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");  
    navigate("/admin");  
  };

  const renderContent = () => {
    switch (selectedComponent) {
      case "header":
        return <Header />;
      case "faqs":
        return <FAQS />;
        case "team":
        return <OurTeam />;
        case "WhyBrainBank":
          return <WhyBrainBank />;
      default:
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">BrainBank Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DashboardCard title="Total Questions" value={count} bgColor="blue-500" />
              <DashboardCard title="Total Users" value="1" bgColor="green-500" />
              <DashboardCard title="User Name" value="@Admin" bgColor="yellow-500" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex">
      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={true} variant="persistent">
        <div className="w-60 h-screen bg-green-400 text-white p-5">
          <h2 className="text-xl font-bold mb-3">Menu</h2>
          <Divider />
          <List>
            <ListItem button onClick={() => handleMenuClick("dashboard")}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => handleMenuClick("header")}>
              <ListItemText primary="Header" />
            </ListItem>
            <ListItem button onClick={() => handleMenuClick("faqs")}>
              <ListItemText primary="FAQs" />
            </ListItem>
            <ListItem button onClick={() => handleMenuClick("team")}>
              <ListItemText primary="Team" />
            </ListItem>
            <ListItem button onClick={() => handleMenuClick("WhyBrainBank")}>
              <ListItemText primary="Why BrainBank" />
            </ListItem>
          </List>
          <Divider />
          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            variant="contained"
            fullWidth
            className="mt-4 bg-red-500"
          >
            Logout
          </Button>
        </div>
      </Drawer>

      {/* Content Area */}
      <div className="flex-1 p-4 ml-60 pt-4">{renderContent()}</div>
    </div>
  );
};

// Reusable card component for dashboard stats
const DashboardCard = ({ title, value, bgColor }) => (
  <div className={`bg-${bgColor} text-white p-5 rounded-lg shadow-md`}>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

export default Dashboard;
