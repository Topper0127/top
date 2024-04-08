import {
  Box,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Social } from "../../types/social";
import { ContactForm } from "./form";
import { Socials } from "../Socials";

type contactProps = {
  socials: Social[];
};

export const Contact: React.FC<contactProps> = (props: contactProps) => {
  return (
    <>
      <Heading size={"xl"} textAlign={"left"}>
        Contact me!
      </Heading>
      <Text mt={5}>
        Feel free to fill the form down below, or contact me directly by email
      </Text>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={{
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
            },
          },
          hidden: { opacity: 0, x: -300 },
        }}
      >
        <Stack
          spacing={{ base: 10, sm: 48 }}
          mt={8}
          direction={{ base: "column", sm: "row" }}
          justifyContent={"space-between"}
        >
          <Box flex={4}>
            <ContactForm />
          </Box>
          <VStack
            alignSelf={"center"}
            alignItems={{ base: "self-start", sm: "self-end" }}
            textAlign={{ base: "start", sm: "end" }}
            flex={3}
            width={"100%"}
          >
            <Box>
              <Heading size={"md"}>Email</Heading>
              <Link href="mailto:hello@hafidziti.dev" color={"blue.500"}>
                hello@hafidziti.dev
              </Link>
            </Box>
            <Box>
              <Heading size={"md"} mt={6}>
                Address
              </Heading>
              <Text>Somewhere in Grenoble, France</Text>
            </Box>
            <Box>
              <Heading size={"md"} mt={6}>
                Social
              </Heading>
              <HStack>
                <Socials socials={props.socials} />
              </HStack>
            </Box>
          </VStack>
        </Stack>
      </motion.div>
    </>
  );
};
