import { RiddleFilterContext } from "@/components/providers/riddleFilter";
import { useContext } from "react";

export default function useRiddleFilter() {
  const filter = useContext(RiddleFilterContext);

  return filter;
}
