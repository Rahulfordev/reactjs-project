import BuiltForTeam from "../../components/BuiltForTeam/BuiltForTeam";
import BuiltWay from "../../components/BuiltWay/BuiltWay";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Teams from "../../components/Teams/Teams";
import ToolsFeature from "../../components/ToolsFeature/ToolsFeature";
import Trusted from "../../components/Trusted/Trusted";
import Work from "../../components/Work/Work";
import WorkWays from "../../components/WorkWays/WorkWays";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Header />
      <Trusted />
      <Feature />
      <Work />
      <ToolsFeature />
      <WorkWays />
      <BuiltWay />
      <BuiltForTeam />
      <Teams />
      <Footer />
    </div>
  );
};

export default Home;
