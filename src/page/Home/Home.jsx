import NavList from "../../componets/NavList/NavList";
import Header from "../../componets/Header/Header";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavList></NavList>
            
            <div className="grid grid-cols-4 gap-8">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h3 className="text-3xl">news comingggggg sooon </h3>
                </div>
                <div>
                    <RightSideNav>

                    </RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;