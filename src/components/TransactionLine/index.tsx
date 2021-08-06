import React from "react";
import { Description, Line, Price, Title } from "./style";
interface TransactionLineProps {
  title: string;
  description: string;
  price: string;
}
const TransactionLine = ({ title, description, price }: TransactionLineProps) => (
  <Line>
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <Price>{price}</Price>
  </Line>

)

export default TransactionLine;