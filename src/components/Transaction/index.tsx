import React from 'react';

import DollarSVG from '../../assets/sales.svg';

import {
  Container,
  Title,
  TitleContainer,
  Ammount,
  IconContainer,
  TransactionFooter,
  TypeContainer,
  Type,
  Date,
} from './styles';

import formatValue from '../../utils/formatValue';

interface TransactionProps {
  title: string;
  type: 'income' | 'outcome';
  value: number;
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
      <Ammount type={type}>{formatValue(value)}</Ammount>
    </TitleContainer>

    <TransactionFooter>
      <TypeContainer>
        <IconContainer>
          <DollarSVG />
        </IconContainer>
        <Type>{category}</Type>
      </TypeContainer>

      <Date>03/07/2020</Date>
    </TransactionFooter>
  </Container>
);

export default Transaction;
