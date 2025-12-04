import { RiddleResponseType } from "@/app/api/riddle/[slug]/types";
import { createContext, useState } from "react";
import useRiddleFilter from "@/components/hooks/useRiddleFilter";

export const RiddleFetcherContext = createContext<{
  riddle: RiddleResponseType | null;
  fetchData: (personId: string, filter: string[]) => Promise<void>;
  isLoading: () => boolean;
  isOutOfRiddles: () => boolean;
  reset: (riddleId: string, personId: string) => void;
}>({
  riddle: null,
  fetchData: () => Promise.resolve(undefined),
  isLoading: () => true,
  isOutOfRiddles: () => false,
  reset: () => undefined,
});

export function RiddleFetcherProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [riddle, setRiddle] = useState<null | RiddleResponseType>(null);
  const [loading, setLoading] = useState(true);
  const [outOfRiddles, setOutOfRiddles] = useState(false);
  const riddleFilter = useRiddleFilter();

  const isLoading = () => {
    return loading;
  };

  const isOutOfRiddles = () => {
    return outOfRiddles;
  };

  const reset = (riddleId: string, personId: string) => {
    setLoading(true);
    fetchData(personId, riddleFilter.add(riddleId));
  };

  async function fetchData(personId: string, filter: string[]) {
    try {
      const filterParams = new URLSearchParams();
      filter.forEach((riddleId) => filterParams.append("filter", riddleId));

      const response = await fetch(
        `/api/riddle/${personId}?${filterParams.toString()}`
      );
      if (!response.ok) {
        if (response.status === 422) {
          setOutOfRiddles(true);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        const result = await response.json();
        setRiddle(result);
      }
    } catch {
      /* pass */
    } finally {
      setLoading(false);
    }
  }

  return (
    <RiddleFetcherContext.Provider
      value={{ riddle, fetchData, isLoading, isOutOfRiddles, reset }}
    >
      {children}
    </RiddleFetcherContext.Provider>
  );
}
