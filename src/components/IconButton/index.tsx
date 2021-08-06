import React from "react";
import { Icon, IconButtonClass, Label } from "./style";

interface IconButtonProps {
  type: string;
  label: string;
}

const getIcon = (type: string) => {
  const ICON_PATH = "/assets/icons/";
  return {
    backgroundImage: `url(${ICON_PATH}${type.toLowerCase()}.svg)`,
  };
};

const IconButton = ({type, label}: IconButtonProps) => (<IconButtonClass>
<Icon style={getIcon(type)}></Icon>
{label !== "" && <Label>{label}</Label>}
</IconButtonClass>
)

export default IconButton