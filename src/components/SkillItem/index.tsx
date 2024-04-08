import { HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Skill as skillItemProps } from "../../types/skill";
import { iconColors } from "../../utils/IconColors";

export const SkillItem: React.FC<skillItemProps> = (props: skillItemProps) => {
  const { name, Icon, dabbled = false } = props;
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
          },
        },
        hidden: { opacity: 1, y: 80 },
      }}
    >
      <HStack width={"138px"} boxShadow="md" p="1.5" rounded="md">
        <Icon
          color={iconColors[name.replace(" ", "").toLowerCase()]}
          size={45}
        />
        {dabbled ? (
          <Text color={"gray.500"}>{name}</Text>
        ) : (
          <Text> {name}</Text>
        )}
      </HStack>
    </motion.div>
  );
};
