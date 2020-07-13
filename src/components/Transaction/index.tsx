import React from 'react';

import dollarImg from '../../assets/vendas.png';

import {
  Container,
  Title,
  TitleContainer,
  Ammount,
  TransactionFooter,
  TypeContainer,
  Icon,
  Type,
  Date,
} from './styles';

interface TransactionProps {
  title: string;
  type: 'income' | 'outcome';
  value: string;
  category: string;
}

const Transaction: React.FC<TransactionProps> = ({
  title,
  type,
  value,
  category,
}: TransactionProps) => (
  <Container>
    <TitleContainer>
      <Title>{title}</Title>
      <Ammount type={type}>{value}</Ammount>
    </TitleContainer>

    <TransactionFooter>
      <TypeContainer>
        <Icon source={dollarImg} />
        <Type>{category}</Type>
      </TypeContainer>

      <Date>03/07/2020</Date>
    </TransactionFooter>
  </Container>
);

export default Transaction;
