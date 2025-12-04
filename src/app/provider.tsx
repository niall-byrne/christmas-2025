"use client";

import { RiddleFetcherProvider } from "@/components/providers/riddleFetcher";
import { RiddleFilterProvider } from "@/components/providers/riddleFilter";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function RootLayout(props: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <RiddleFilterProvider>
      <RiddleFetcherProvider>
        <ChakraProvider value={defaultSystem}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            {props.children}
          </ThemeProvider>
        </ChakraProvider>
      </RiddleFetcherProvider>
    </RiddleFilterProvider>
  );
}
