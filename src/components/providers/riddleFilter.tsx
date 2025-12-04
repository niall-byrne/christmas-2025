import { createContext, useState } from "react";

export const RiddleFilterContext = createContext<{
  filter: string[];
  add: (riddleId: string) => string[];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}>({ filter: [], add: (riddleId: string) => [] });

export function RiddleFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filter, setFilter] = useState<string[]>([]);

  const add = (riddleId: string) => {
    const newFilter = [...filter, riddleId];
    setFilter(newFilter);
    return newFilter;
  };

  return (
    <RiddleFilterContext.Provider value={{ filter, add }}>
      {children}
    </RiddleFilterContext.Provider>
  );
}
