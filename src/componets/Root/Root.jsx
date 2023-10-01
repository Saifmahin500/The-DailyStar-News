import { Outlet } from "react-router-dom";
import NavList from "../NavList/NavList";
import Header from "../Header/Header";



const Root = () => {
    return (
        <div>
            <Header></Header>
            <NavList></NavList>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;