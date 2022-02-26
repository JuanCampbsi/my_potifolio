import { Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Outlook, Github, Linkedin, WhatsApp } from "../../svg/AllSvgs";
import { ClickProps, Icons, Line } from "./styles";

const ButtonSocialIcons = ({ click }: ClickProps) => {
  return (
    <>
      <Icons click={click}>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
        >
          <Link href="https://github.com/JuanCampbsi">
            <Github width={25} height={25} fill={"currentColor"} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
          <Link href="https://www.linkedin.com/in/juancampos-ferreira">
            <Linkedin width={25} height={25} fill={"currentColor"} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <Link href="mailto:juancampos.bsi@outlook.com">
            <Outlook
              click={click}
              width={25}
              height={25}
              fill={"currentColor"}
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.6 }}
        >
          <Link href="https://api.whatsapp.com/send?phone=21967713044&text=sua%20mensagem">
            <WhatsApp width={25} height={25} fill={"currentColor"} />
          </Link>
        </motion.div>

        <Line
          click={click}
          initial={{
            height: 0,
          }}
          animate={{
            height: "8rem",
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.8,
          }}
        />
      </Icons>
    </>
  );
};

export default ButtonSocialIcons;
