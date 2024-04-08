import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  Link,
  Spacer,
  TagLeftIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Experience as ExperienceType,
  Technology,
} from "../../types/experience";
import { iconColors } from "../../utils/IconColors";

type Props = {
  experience: ExperienceType;
  minHeight: number;
};

export const Card: React.FC<Props> = ({
  experience: {
    title,
    customer,
    image,
    description,
    period,
    colors,
    technologies,
    link,
  },
  minHeight,
}: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      animate={{ transition: { type: "spring", duration: 0.1 } }}
      // viewport={{ once: true }}
    >
      <Center py={6} w={"full"}>
        <Flex
          maxW={"400px"}
          w={"100%"}
          h={"100%"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          minHeight={{ base: 0, sm: `${minHeight}px` }}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box>
            <Center
              h={"100px"}
              w={"full"}
              bgGradient={`linear(to-r, ${colors[0]}, ${colors[1]})`}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={image}
                name={customer}
                objectFit={"cover"}
                bg="white"
                boxShadow={"xl"}
              />
            </Flex>

            <Box py={3} px={4}>
              <Stack spacing={0} mb={3}>
                <Heading
                  as="i"
                  fontSize={"lg"}
                  fontWeight={500}
                  fontFamily={"body"}
                >
                  {title}
                </Heading>
                <Text as="i" fontSize={"xs"} color={"gray.500"}>
                  {period}
                </Text>
                <Text
                  fontSize={"sm"}
                  color={useColorModeValue("gray.800", "white")}
                  pt={1}
                >
                  {description}
                </Text>
              </Stack>
              <Wrap mb={2}>
                {technologies.map((techno: Technology, index: number) => (
                  <WrapItem key={index}>
                    <Tag size={"sm"} variant={"subtle"} px={2} py={1}>
                      <TagLeftIcon boxSize="30px">
                        <techno.Icon
                          color={
                            iconColors[
                              techno.name.replace(" ", "").toLowerCase()
                            ]
                          }
                          size={24}
                        ></techno.Icon>
                      </TagLeftIcon>
                      <TagLabel ml="0">{techno.name}</TagLabel>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Box>
          {link && (
            <Flex align={"self-end"} alignSelf="flex-end" py={3} px={4}>
              <Spacer />
              <Box>
                <Link href={link} isExternal>
                  <Text fontSize="sm" color={"blue.400"}>
                    Take a look <ExternalLinkIcon />
                  </Text>
                </Link>
              </Box>
            </Flex>
          )}
        </Flex>
      </Center>
    </motion.div>
  );
};
