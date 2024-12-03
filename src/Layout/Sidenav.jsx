import React from "react";
import {
  VideoCameraFilled,
  SettingFilled
} from "@ant-design/icons";
import { Menu, Modal } from "antd";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import CurrentTime from "../Components/CurrenTime";

const Sidenav = ({collapsed}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Extract the current page from the path
  const currentPage = pathname === "/" ? "reports" : pathname.replace("/", "");

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <>
      {/* Logout Confirmation Modal */}


      {/* Side Navigation */}
      <div className="sideNav">
      <div className="flex justify-center p-3 bg-[#06175d]">
          <img
            src="https://eimkeia.stripocdn.email/content/guids/CABINET_8270216c780e362a1fbcd636b59c67ae376eb446dc5f95e17700b638b8c3f618/images/indus_logo_dev.png"
            alt="Logo"
            className="object-contain w-36"
          /> 
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[currentPage]} // Active link determined by pathname
          className="flex flex-col gap-3"
        >
          {/* Reports Menu Item */}
          <Menu.Item
            key="reports"
            style={{
              background: currentPage === "reports" ? "#43996a" : "",
              boxShadow:
                currentPage === "reports" ? "0 20px 27px rgb(0 0 0 / 5%)" : "",
            }}
          >
            <NavLink to="/" className=" text-decoration-none">
              <SettingFilled style={{ fontSize: "1rem", color: "#fff" }} />
              <span className="label" style={{ color: currentPage === "reports" ? "#fff" : "#fff", fontWeight: currentPage === "reports" ? "700" : "500" }}>
                Machine 
              </span>
            </NavLink>
          </Menu.Item>

          {/* Personal AI Menu Item */}
          {/* <Menu.Item
            key="personal"
            style={{
              background: currentPage === "personal" ? "#b2ecec" : "",
              boxShadow:
                currentPage === "personal" ? "0 20px 27px rgb(0 0 0 / 5%)" : "",
            }}
          >
            <NavLink to="/personal" className=" text-decoration-none">
              <CodepenCircleOutlined
                style={{ fontSize: "1.2rem", color: "#000" }}
              />
              <span className="label" style={{ color: currentPage === "personal" ? "#000" : "#000", fontWeight: currentPage === "personal" ? "700" : "500" }}>
                Personal AI
              </span>
            </NavLink>
          </Menu.Item> */}

          {/* Logout Menu Item */}
          {/* <Menu.Item key="logout" className="bg-white shadow-lg" onClick={showModal}>
            <div to="/personal" className="p-3 text-decoration-none">
              <LogoutOutlined
                style={{ fontSize: "1.2rem", color: "#000" }}
              />
              <span className=" cursor-pointer text-black font-bold" >
                Logout
              </span>
            </div>


          </Menu.Item> */}
        </Menu>
      </div>
          <CurrentTime collapsed={collapsed}/>
      
    </>
  );
};

export default Sidenav;
