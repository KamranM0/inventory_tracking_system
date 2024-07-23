import { Outlet } from "react-router-dom";

function WebsiteLayout() {
  return (
    <div className="mx-[20px] flex flex-col font-inter sm:mx-[40px] xl:mx-[70px] 2xl:mx-[96px]">
      <Outlet />
    </div>
  );
}

export default WebsiteLayout;
