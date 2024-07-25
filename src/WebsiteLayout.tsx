import { Outlet } from "react-router-dom";

function WebsiteLayout() {
  return (
    <div className="flex flex-col font-inter">
      <Outlet />
    </div>
  );
}

export default WebsiteLayout;
