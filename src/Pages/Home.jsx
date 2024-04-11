import BreakingNews from "../Components/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import {useLoaderData} from "react-router-dom"
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4 gap-5 my-10">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>

                {/* News Container */}
                <div className="border md:col-span-2 flex flex-col gap-1">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;