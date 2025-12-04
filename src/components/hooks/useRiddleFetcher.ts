import { useContext, useEffect, useState } from "react";
import { RiddleFetcherContext } from "@/components/providers/riddleFetcher";

export default function useRiddleFetcher(personId: string) {
  const [isMounted, setMounted] = useState(false);
  const fetcher = useContext(RiddleFetcherContext);

  useEffect(() => {
    function mount() {
      setMounted(true);
    }

    mount();
  }, []);

  useEffect(() => {
    if (isMounted) {
      fetcher.fetchData(personId, []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  return fetcher;
}
