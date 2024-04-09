import BreakingNews from "../Components/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <h2 className="text-3xl font-turret font-bold">This Is home</h2>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border md:col-span-2">
                    <h2 className="text-4xl">Main Part..</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;