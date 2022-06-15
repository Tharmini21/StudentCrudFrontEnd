import { Outlet } from "react-router-dom";
import SideNav from "./Student/SideNav";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <SideNav />
        <Outlet />
    </div>;
};

export default AppLayout;