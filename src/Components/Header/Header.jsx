import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const itemRenderer = (item) => (
    <Link to={item.route} className="flex align-items-center p-menuitem-link"> {/* Use Link component with 'to' prop */}
    <span className={item.icon} />
    <span className="mx-2">{item.label}</span>
    {item.badge && <Badge className="ml-auto" value={item.badge} />}
    {item.shortcut && (
      <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
        {item.shortcut}
      </span>
    )}
  </Link>
  );
  const items = [
    {
      label: "HOME",
      route:"/",
      template:itemRenderer
      
    },
    {
      label: "ABOUT US",
      route:"/about-us",
      template:itemRenderer
    },
    {
      label: "PRODUCTS",
      route:"/products",
      template:itemRenderer
    },
    {
      label: "SERVICES",
      route:"/services",
      template:itemRenderer
    },
    {
      label: "CONTACT US",
      route:"/contact-us",
      template:itemRenderer
    },
  ];

  const start = (
    <img alt="logo" src="/Assets/logo.png" height="60" className="mr-2"></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
        
      {/* <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
  />*/}
      <img alt="logo" src="/Assets/call.png" height="60" className="mr-2"></img>
    </div>
  );

  return (
    <div className="sticky-top"> 
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
};

export default Header;
