import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4">
        <div className="md:col-span-3">
          <h2>News Details</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
