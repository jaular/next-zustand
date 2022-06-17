import { useEffect, useState } from "react";
import { useCourseStore } from "store/courseStore";

export const useCourseHydration = () => {
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    const unsubHydrate = useCourseStore.persist.onHydrate(() =>
      setHydrated(false)
    ); // Note: this is just in case you want to take into account manual rehydrations. You can remove this if you don't need it/don't want it.
    const unsubFinishHydration = useCourseStore.persist.onFinishHydration(() =>
      setHydrated(true)
    );

    setHydrated(useCourseStore.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};

// https://github.com/pmndrs/zustand/wiki/Persisting-the-store's-data#how-can-i-check-if-my-store-has-been-hydrated
