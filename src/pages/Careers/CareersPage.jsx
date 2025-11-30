// src/pages/Careers/CareersPage.jsx
import "../../styles/main_scss/main.scss";
import "./CareersPage_css/CareersPage.scss";

import CareersHeroSection from "../../sections/careers/CareersHeroSection";
import WhyWorkHereSection from "../../sections/careers/WhyWorkHereSection";
import CulturePerksSection from "../../sections/careers/CulturePerksSection";
import OpenPositionsSection from "../../sections/careers/OpenPositionsSection";
import HiringProcessSection from "../../sections/careers/HiringProcessSection";
import CareersFaqSection from "../../sections/careers/CareersFaqSection";
import CareersFinalCtaSection from "../../sections/careers/CareersFinalCtaSection";

import {
  careersHeroBadges,
  careersValues,
  careersPerks,
  careersOpenPositions,
  careersProcessSteps,
  careersFaqItems,
} from "../../data/careers";

import { siteConfig } from "../../config/siteConfig";

function CareersPage() {
  const studioName = siteConfig?.studioName || "Your Studio";

  return (
    <main className="careers-page">
      <CareersHeroSection
        studioName={studioName}
        badges={careersHeroBadges}
      />
      <WhyWorkHereSection values={careersValues} />
      <CulturePerksSection perks={careersPerks} />
      <OpenPositionsSection positions={careersOpenPositions} />
      <HiringProcessSection steps={careersProcessSteps} />
      <CareersFaqSection items={careersFaqItems} />
      <CareersFinalCtaSection />
    </main>
  );
}

export default CareersPage;
