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

interface CardProps {
  title: string;
  icon: React.FC;
  ammount: string;
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
      <Ammount total={total && total}>{ammount}</Ammount>
      <LastTransaction total={total && total}>
        {lastTransactionSentence}
      </LastTransaction>
    </AmmountContainer>
  </CardContainer>
);

export default Card;
