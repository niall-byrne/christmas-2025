import { useContext } from "react";
import { RiddleFilterContext } from "@/components/providers/riddleFilter";

export default function useRiddleFilter() {
  const filter = useContext(RiddleFilterContext);

  return filter;
}
