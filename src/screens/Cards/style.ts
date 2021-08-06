import styled from 'styled-components';

export const Main = styled.div`
  background: #003d4d;
  padding: 16px 0;
  height: 100vh;
  width: 100vw;
`;

export const CardsClass = styled.div`
  max-width: 798px;
  margin: 0 auto;
`;

export const CardsList = styled.div`
  height: 190px;
  overflow-y: auto;
  display: flex;
`;

export const CardsWrapper = styled.div`
  overflow: hidden;
  height: 180px;
`;

export const Header = styled.h1`
  color: rgba(255,255,255,0.5);
  font-size: 16px;
  font-weight: 400;
  margin: 0 16px 16px;
`;

export const Expenses = styled.div`
  max-width: 798px;
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 80px;
  background: #f6f6f6;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const IconsWrapper = styled.div`
  height: 90px;
  overflow: hidden;
  margin-top: 8px;
`;

export const IconsList = styled.div`
  height: 100px;
  overflow-y: auto;
  display: flex;
  padding: 0 10px;
`;

export const LastTransaction = styled.div`
  padding: 0 16px;
  margin: 24px 0;
  h2 {
    margin: 16px 0;
  }
`

export const Icons = styled.div` h2 {
  margin: 16px 16px;
}`;
