import SectionHero from "components/SectionHero/SectionHero";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionListTrips from "./SectionListTrips";
import { useDispatch, useSelector } from "react-redux";
import { TripDataType } from "data/types";
import { useEffect, useState } from "react";
import { getTrips } from "../../redux/actions/tripActions";
import { setLoading } from "../../redux/actions/miscActions";

function PageHome() {
  const [isFetching, setFetching] = useState(false);

  const store = useSelector((state: { trips: { items: TripDataType[] } }) => ({
    trips: state.trips.items,
    state: state,
  }));

  const dispatch = useDispatch();

  const fetchTrips = () => {
    setFetching(true);
    dispatch(getTrips());
  };

  useEffect(() => {
    if (store.trips.length === 0 || !store.trips) {
      fetchTrips();
    }

    window.scrollTo(0, 0);
    dispatch(setLoading(false));
  }, []);

  return (
    <div className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero
          beginPoints={Array.from(
            new Set(store.trips.map((t) => t.fromProvince))
          )}
          destinationPoints={Array.from(
            new Set(store.trips.map((t) => t.toProvince))
          )}
          className="pt-10 lg:pt-16 lg:pb-16"
        />

        <div className="relative">
          <SectionListTrips
            beginPoint={"Tp.HCM"}
            destinationPoint={"Bà Rịa-Vũng Tàu"}
            className="33"
          />
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
