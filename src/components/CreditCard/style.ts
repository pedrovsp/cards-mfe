import styled from 'styled-components';
export const Card = styled.div`
  width: 270px;
  height: 160px;
  border-radius: 12px;
  background: linear-gradient(45deg, rgba(31,147,177,1) 0%, rgba(0,49,62,1) 80%);
  position: relative;
  overflow: hidden;
  margin-left: 16px;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
`;

export const CardLogo = styled.div`
  width: 70px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  position: absolute;
  top: 10px;
  right: 8px;
  z-index: 1;
`;
export const CardBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(15deg) scale(1.2);
  filter: blur(10px);
  opacity: 0.8;
  z-index: 2;
`;
export const CardOp = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%);
  z-index: 3;
`;
export const CardChip = styled.div`
  position: absolute;
  background-image: url('/assets/cards/cc-chip.svg');
  width: 37px;
  height: 28px;
  z-index: 3;
  top: 30px;
  left: 12px;
`;
export const CardName = styled.div`
  position: absolute;
  bottom: 16px;
  font-family: Inconsolata;
  font-size: 16px;
  text-transform: uppercase;
  color: #ccc;
  left: 12px;
`;
export const CardDate = styled.div`
  font-family: Inconsolata;
  font-size: 16px;
  text-transform: uppercase;
  color: #ccc;
  position: absolute;
  bottom: 16px;
  right: 12px;
`;
export const CardDigits = styled.div`
  font-family: Inconsolata;
  font-size: 20px;
  text-transform: uppercase;
  color: #ccc;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 80px;
  left: 12px;
`;
export const Digit = styled.div`
  margin-right: 6px;
  letter-spacing: 3px;
`;
