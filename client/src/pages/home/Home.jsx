import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <div className="homeTitle">Explore the World</div>
        <Featured/>
        <div className="homeTitle">Browse by property type</div>
        <PropertyList/>
        <div className="homeTitle">Most Viewed</div>
        <FeaturedProperties/>
        <MailList/>
      </div>
    </div>
  );
};

export default Home;
