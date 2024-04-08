import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Quote as quoteType } from "../../types/quote";

const getTodaysQuote = async (): Promise<quoteType> => {
  const response = await fetch("/api/quote", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return Promise.resolve(data);
};

export const Quote: React.ElementType = () => {
  const [quote, setQuote] = useState<quoteType>({});
  useEffect(() => {
    if (!quote.q) {
      getTodaysQuote().then((data: quoteType) => setQuote(data[0]));
    }
  }, []);

  return (
    <Box>
      <Heading size={"xl"} textAlign={"left"}>
        Today&apos;s Quote
      </Heading>
      <VStack mt={5}>
        <Text fontSize="4xl">
          <span>&#10077;</span>
          {quote.q?.trim()}
          <span>&#10078;</span>
        </Text>
        <HStack justifyContent={"space-between"} width="90%">
          <Link href="https://zenquotes.io/" isExternal>
            zenquotes.io
          </Link>
          <Text fontSize="1xl" alignSelf={"end"}>
            ― {quote.a}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};
