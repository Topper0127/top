import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link as reactLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { Link as LinkType } from "../../types/link";
import { Logo } from "../Logo";
import styles from "./navbar.module.css";

type navBarProps = {
  links: LinkType[];
};

export const NavBar: React.FC<navBarProps> = (props: navBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = (): void => (isOpen ? onClose() : onOpen());
  const _handleLinkOnClick = (): void => {
    if (isOpen) handleToggle();
  };

  const _renderNavBarLinks = (): React.ReactNode => {
    // Color Schemes for Link are not implemented in the default theme.
    // You can extend the theme to implement them.
    return props.links.map((link: LinkType, index: number) => (
      <Link
        key={index}
        as={reactLink}
        to={link.route}
        activeClass={styles.active}
        spy={true}
        smooth={true}
        px={3}
        py={1}
        fontSize={"lg"}
        borderRadius={"lg"}
        color={useColorModeValue("gray.800", "white")}
        onClick={_handleLinkOnClick}
        offset={-75}
      >
        {link.name}
      </Link>
    ));
  };

  return (
    <Flex
      as="nav"
      w={"100%"}
      h={"65px"}
      align={"center"}
      justify={"space-between"}
      wrap="wrap"
      pl={4}
      pr={{ base: 0, sm: 4 }}
      py={2}
      pos={"fixed"}
      bgColor={useColorModeValue("white", "gray.800")}
      boxShadow="2xl"
      zIndex={"sticky"}
    >
      <Flex
        as={Link}
        mr={5}
        alignItems={"center"}
        href={"/"}
        _hover={{ textDecoration: "none" }}
      >
        <Logo color={useColorModeValue("black", "white")} />
        <Heading
          as="h1"
          size="lg"
          letterSpacing={"tighter"}
          color={useColorModeValue("gray.800", "white")}
        >
          Hafid Ziti
        </Heading>
      </Flex>

      <Flex align={"center"}>
        <Box mr={2} display={{ base: "block", sm: "none" }}>
          <DarkModeSwitch />
        </Box>

        <Box display={{ base: "block", sm: "none" }}>
          <Hamburger
            toggled={isOpen}
            size={18}
            duration={0.5}
            distance={"sm"}
            toggle={handleToggle}
            color={useColorModeValue("#1A202C", "#fff")}
            label="menu items"
          />
        </Box>

        {isOpen ? (
          <AnimatePresence>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0, transition: { type: "spring" } }}
              exit={{ x: 200, transition: { type: "spring" } }}
              style={{ position: "fixed", top: "4rem", right: "7.35rem" }}
            >
              <VStack
                pos={"fixed"}
                align="stretch"
                py={4}
                px={3}
                bgColor={useColorModeValue("white", "gray.800")}
                rounded={"md"}
              >
                {_renderNavBarLinks()}
              </VStack>
            </motion.div>
          </AnimatePresence>
        ) : (
          <Stack
            direction={{ base: "column", sm: "row" }}
            display={{ base: isOpen ? "block" : "none", sm: "flex" }}
            width={{ base: "full", sm: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, sm: 0 }}
            mx={{ base: 0, sm: 8 }}
            color="black"
          >
            {_renderNavBarLinks()}
          </Stack>
        )}

        <Box display={{ base: "none", sm: "block" }}>
          <DarkModeSwitch />
        </Box>
      </Flex>
    </Flex>
  );
};
