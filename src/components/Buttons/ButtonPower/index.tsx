import { NavLink } from "react-router-dom";
import { PowerBtn } from "../../svg/AllSvgs";

import { Power } from "./styles";

const ButtonPower = () => {
  return (
    <>
      <Power>
        <NavLink to="/">
          <PowerBtn width={30} height={30} fill="currentColor" />
        </NavLink>
      </Power>
    </>
  );
};

export default ButtonPower;
