import styled from 'styled-components';
export const Line = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 30%;
  background: #fff;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
`;
export const Title = styled.div`
  font-size: 14px;
  line-height: 1.2em;
  margin-bottom: 6px;
`;
export const Description = styled.div`
  font-size: 11px;
  color: #888;
  line-height: 1.2em;
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 600;
  text-align: right;
  padding: 0;
`;
