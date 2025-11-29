import HeroSection from "../../sections/home/HeroSection.jsx";
import FeaturedGamesSection from "../../sections/home/FeaturedGamesSection.jsx";
import StudioScrollTrack from "../../sections/home/StudioScrollTrack.jsx";
import OurStudioSection from "../../sections/home/OurStudioSection.jsx";


function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedGamesSection />
      <StudioScrollTrack />
      <OurStudioSection />
    </div>
  );
}

export default HomePage;
