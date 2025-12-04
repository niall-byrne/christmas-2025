import { Box } from "@chakra-ui/react";

export default function Background() {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      bgImage="url('/images/background.jpg')"
      filter="blur(8px)"
      position="relative"
    ></Box>
  );
}
