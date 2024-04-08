import React, { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Radar } from "react-chartjs-2";
import { MainSkill, Skill } from "../../types/skill";
import { SkillItem } from "../SkillItem";

type skillsProps = {
  skills: Skill[];
  mainSkills: MainSkill[];
};

const dataTemplate: ChartData<"radar"> = {
  labels: [],
  datasets: [
    {
      label: "", // label to display as the legend of the chart, it'll be also displayed in the tooltip
      data: [],
      backgroundColor: "rgba(34, 202, 236, .1)",
      borderColor: "rgba(34, 202, 236, 1)",
    },
  ],
};

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Skills: React.FC<skillsProps> = (props: skillsProps) => {
  const { skills, mainSkills } = props;

  const [data] = useState({
    ...dataTemplate,
    labels: (dataTemplate.labels = mainSkills.map(
      (mSkill: MainSkill) => mSkill.name
    )),
    datasets: [
      {
        ...dataTemplate.datasets[0],
        data: mainSkills.map((mSkill: MainSkill) => mSkill.level),
      },
    ],
  });

  // Define the main color, it depends of selected theme(White/Dark)
  const color: string = useColorModeValue(
    `rgba(0, 0, 0,`,
    "rgba(255, 255, 255,"
  );

  const customizedOptions: ChartOptions<"radar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: `${color} .9)`,
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: {
          color: `${color} .2)`,
        },
        ticks: {
          showLabelBackdrop: false, // show or not the background of ticks
          color: `${color} .8)`,
          stepSize: 10, // step to increment the value of the level
          font: {
            size: 12, // size of value of the level
          },
        },
        pointLabels: {
          color: `${color} .8)`,
          font: {
            size: 12, // size of the labels
          },
        },
      },
    },
  };

  return (
    <>
      <Heading size={"xl"} textAlign={"left"}>
        Skills
      </Heading>
      <Stack
        mt={5}
        spacing={10}
        direction={{ base: "column", sm: "row" }}
        justifyContent={"space-between"}
      >
        <Box>
          <Text>
            Technology I&apos;ve worked &{" "}
            <Text as="span" color="gray.500">
              dabbled
            </Text>{" "}
            with:
          </Text>
          <SimpleGrid
            columns={{ base: 2, sm: 4 }}
            spacing="6"
            p="5"
            pl={{ base: 5, sm: 0 }}
            textAlign="center"
            alignSelf={"start"}
          >
            {skills.map((skill: Skill, index: number) => {
              return (
                <SkillItem
                  key={index}
                  name={skill.name}
                  Icon={skill.Icon}
                  dabbled={skill.dabbled}
                />
              );
            })}
          </SimpleGrid>
        </Box>
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          animate={{ transition: { type: "spring", duration: 0.1 } }}
        >
          <Text>Main skill set 🚀</Text>
          <Box
            mt={{ base: 0, sm: 16 }}
            pt={0}
            width={{ base: "350px", sm: "300px", md: "400px", lg: "500px" }}
          >
            <Radar data={data} options={customizedOptions} />
          </Box>
        </motion.div>
      </Stack>
    </>
  );
};
