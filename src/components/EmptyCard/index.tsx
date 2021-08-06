import React from "react";
import PlusIcon from './plus.svg';
import { Add, EmptyCardClass, PlusIconClass } from "./style";
const EmptyCard = () => (
<EmptyCardClass>
  <PlusIconClass>
    <img src={PlusIcon}/>
  </PlusIconClass>
  <Add>Adicionar cartão</Add>
</EmptyCardClass>
)
export default EmptyCard;