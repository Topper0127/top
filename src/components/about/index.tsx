import { Heading, Text } from "@chakra-ui/react";

type aboutProps = {
  content: string;
};

export const About: React.FC<aboutProps> = (props: aboutProps) => {
  return (
    <>
      <Heading size={"xl"} textAlign={"left"}>
        {"About me"}
      </Heading>
      <Text mt={5}>{props.content}</Text>
    </>
  );
};
