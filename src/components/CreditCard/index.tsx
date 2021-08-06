import React, { CSSProperties } from "react";
import { CARD_IMAGE_PATH } from "./model";
import { Card, CardDate, CardDigits, CardLogo, CardName, Digit } from "./style";

interface CreditCardProps {
  name: string;
  flag: string;
  lastDigits: string;
  expirationDate: string;
}

const getCardImage = (card: string): CSSProperties => ({
  backgroundImage: `url(${CARD_IMAGE_PATH}${card.toLowerCase()}.svg)`,
});

const CreditCard = ({name, flag, lastDigits, expirationDate}: CreditCardProps) => (
  <Card>
    <CardLogo style={getCardImage(flag)}></CardLogo>
    <CardName>{name}</CardName>
    <CardDigits>
      <Digit>••••</Digit>
      <Digit>••••</Digit>
      <Digit>••••</Digit>
      <Digit>{lastDigits}</Digit>
    </CardDigits>
    <CardDate>{expirationDate}</CardDate>
  </Card>
)
export default CreditCard;