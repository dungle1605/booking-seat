import SectionHero from "components/SectionHero/SectionHero";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionListTrips from "./SectionListTrips";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        <div className="relative">
          <SectionListTrips beginPoint={"Tp.HCM"} destinationPoint={"Bà Rịa-Vũng Tàu"} className="33" />
        </div>

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div>
      </div>
    </div>
  );
}

export default PageHome;
