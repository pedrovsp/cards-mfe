import React from 'react'
import CreditCard from '../../components/CreditCard';
import EmptyCard from '../../components/EmptyCard';
import IconButton from '../../components/IconButton';
import LimitBar from '../../components/LimitBar';
import TransactionLine from '../../components/TransactionLine';
import { CardsClass, CardsList, CardsWrapper, Header, Main, Expenses, Icons, IconsWrapper, IconsList, LastTransaction } from './style';

const Cards = () => { return (
<Main>
  <CardsClass>
    <Header>Cartões de Crédito</Header>
    <CardsWrapper>
      <CardsList>
        <CreditCard name="John Doe" lastDigits="8899" expirationDate="07/29" flag="MASTERCARD"></CreditCard>
        <EmptyCard></EmptyCard>
      </CardsList>
    </CardsWrapper>
  </CardsClass>
    <Expenses>
      <Icons>
      <h2>Atalhos rápidos:</h2>
      <IconsWrapper>
        <IconsList>
          <IconButton type="lock" label="Bloquear"></IconButton>
          <IconButton type="history" label="Transações"></IconButton>
          <IconButton type="dollar" label="Pagar"></IconButton>
          <IconButton type="check-shield" label="Limite"></IconButton>
          <IconButton type="message-error" label="Notificações"></IconButton>
          <IconButton type="x-circle" label="Cancelar"></IconButton>
        </IconsList>
      </IconsWrapper>
      </Icons>
    </Expenses>
    <LimitBar></LimitBar>
    <LastTransaction>
      <h2>Últimas transações:</h2>
      <TransactionLine title="Amazon" description="10/08 00:00 - Compras" price="R$ 329,00"></TransactionLine>
      <TransactionLine title="Spotify" description="01/08 00:00 - Assinatura" price="R$ 19,90"></TransactionLine>
      <TransactionLine title="Netflix" description="01/08 00:00 - Assinatura" price="R$ 29,90"></TransactionLine>
    </LastTransaction>
</Main>
)}

export default Cards;