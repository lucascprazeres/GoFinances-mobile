import React, { ReactComponentElement } from 'react';

import {
  CardContainer,
  CardTitleContainer,
  CardTitle,
  IconContainer,
  AmmountContainer,
  Ammount,
  LastTransaction,
} from './styles';

import formatValue from '../../utils/formatValue';

interface CardProps {
  title: string;
  icon: React.FC;
  ammount: number;
  lastTransactionSentence: string;
  total?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  icon: Icon,
  ammount,
  lastTransactionSentence,
  total,
}: CardProps) => (
  <CardContainer total={total && total}>
    <CardTitleContainer>
      <CardTitle total={total && total}>{title}</CardTitle>
      <IconContainer>
        <Icon />
      </IconContainer>
    </CardTitleContainer>

    <AmmountContainer>
      <Ammount total={total && total}>{formatValue(ammount)}</Ammount>
      <LastTransaction total={total && total}>
        {lastTransactionSentence}
      </LastTransaction>
    </AmmountContainer>
  </CardContainer>
);

export default Card;
