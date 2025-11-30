// src/pages/About/AboutPage.jsx
import AboutHeroSection from "../../sections/about/AboutHeroSection";
import OurStoryTimelineSection from "../../sections/about/OurStoryTimelineSection";
import ValuesSection from "../../sections/about/ValuesSection";
import StudioTeamSection from "../../sections/about/StudioTeamSection";
import ProcessSection from "../../sections/about/ProcessSection";
import PartnersHighlightsSection from "../../sections/about/PartnersHighlightsSection";
import JoinUsCtaSection from "../../sections/about/JoinUsCtaSection";

function AboutPage() {
  return (
    <main className="about-page">
      <AboutHeroSection />
      <OurStoryTimelineSection />
      <ValuesSection />
      <StudioTeamSection />
      <ProcessSection />
      <PartnersHighlightsSection />
      <JoinUsCtaSection />
    </main>
  );
}

export default AboutPage;
