import { Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Social } from "../../types/social";

type socialProps = {
  socials: Social[];
};

export const Socials: React.FC<socialProps> = (props: socialProps) => {
  return (
    <>
      {props.socials.map((social: Social, index: number) => {
        return (
          <motion.div
            whileHover={{
              scale: 1.25,
            }}
            whileTap={{ scale: 0.9 }}
            key={index}
          >
            <Link href={social.link} isExternal>
              <Image
                src={`${social.name}.svg`}
                alt={`${social.name}.logo`}
                width={"45px"}
                height={"45px"}
              ></Image>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};
