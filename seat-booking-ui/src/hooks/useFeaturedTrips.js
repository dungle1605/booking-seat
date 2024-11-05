import { useDidMount } from './useDidMount';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useFeaturedTrips = (itemsCount) => {
  const [featuredTrips, setFeaturedTrips] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const didMount = useDidMount(true);

  const disPatch = useDispatch();

  const fetchFeaturedTrips = async () => {
    try {
      setLoading(true);
      setError('');

      const docs = disPatch()

      if (docs.empty) {
        if (didMount) {
          setError('No featured trips found.');
          setLoading(false);
        }
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          items.push({ id: snap.ref.id, ...data });
        });

        if (didMount) {
          setFeaturedTrips(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setError('Failed to fetch featured trips');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (featuredTrips.length === 0 && didMount) {
      fetchFeaturedTrips();
    }
  }, []);

  return {
    featuredTrips, fetchFeaturedTrips, isLoading, error
  };
};

export default useFeaturedTrips;
