import { Box, Center, Flex, Heading, Span } from "@chakra-ui/react";
import { useLayoutEffect, useRef } from "react";

export default function Dialogue({
  children,
  title,
  messages,
}: {
  children: React.ReactNode;
  title: string;
  messages: string[];
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <Box position={"absolute"} top={0} left={0} zIndex="10" w="full" h="full">
      <Flex minHeight="100vh" alignItems={"center"}>
        <Flex className="flex-item" minWidth="100vw" justifyContent={"center"}>
          <Box
            minWidth="200px"
            bg={"grey"}
            borderColor={"black"}
            borderWidth="3px"
            ref={elementRef}
          >
            <Center margin="10px">
              <div>
                <Heading color={"darkred"}>{title}</Heading>
              </div>
              <br />
            </Center>
            <Box margin="10px">
              {messages.map((message, index) => {
                if (message === " ") return <br key={index} />;
                return (
                  <Center key={index}>
                    <Span textAlign={"center"}>{message}</Span>
                  </Center>
                );
              })}
            </Box>
            <Center margin="10px">{children}</Center>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
