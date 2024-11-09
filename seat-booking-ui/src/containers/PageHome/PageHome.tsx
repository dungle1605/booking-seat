import SectionHero from "components/SectionHero/SectionHero";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionListTrips from "./SectionListTrips";
import { useSelector } from "react-redux";
import { TripDataType } from "data/types";
import { useEffect, useState } from "react";

function PageHome() {
  const [searchedTrips, setSearchedTrips] = useState<TripDataType[]>([]);

  const store = useSelector(
    (state: {
      trips: {
        items: TripDataType[];
        searchedTrips: { items: TripDataType[] };
      };
    }) => ({
      trips: state.trips.items,
      searchedTrip: state.trips.searchedTrips,
      state: state,
    })
  );

  useEffect(() => {
    setSearchedTrips(store.searchedTrip.items);
  }, [store.searchedTrip]);

  return (
    <div className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {searchedTrips.length > 0 && (
          <div className="relative">
            <SectionListTrips searchedTrips={searchedTrips} />
          </div>
        )}

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
