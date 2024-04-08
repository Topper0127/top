import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Experience } from "../../types/experience";
import { Card } from "../Card";

type ProjectsProps = {
  experiences: Experience[];
  dailyTasks: string[];
};

export const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {
  const { experiences, dailyTasks } = props;
  return (
    <>
      <Heading size={"xl"} textAlign={"left"}>
        Projects
      </Heading>
      {/* Fixme */}
      <Text mt={5}>
        The most relevant projects I&apos;ve worked on. My daily tasks include:
      </Text>
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        animate={{ transition: { type: "spring", duration: 0.1 } }}
      >
        <Box mt={4} textAlign={{ base: "left", sm: "center" }}>
          {dailyTasks.map((task: string, index: number) => (
            <Tag
              key={index}
              size={"sm"}
              mx={1}
              my={{ base: 1, sm: 0 }}
              colorScheme={"cyan"}
            >
              {task}
            </Tag>
          ))}
        </Box>
      </motion.div>
      <SimpleGrid columns={[1, 2, 3]} spacingX={12}>
        {experiences.map((exp: Experience, index: number) => {
          const minHeight = index > 2 ? 537 : 614;
          return (
            <GridItem key={index}>
              <Card experience={exp} minHeight={minHeight} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  );
};
