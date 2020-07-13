import React from 'react';

import {
  CardContainer,
  CardTitleContainer,
  CardTitle,
  CardLogo,
  AmmountContainer,
  Ammount,
  LastTransaction,
} from './styles';

interface CardProps {
  title: string;
  icon: URL;
  ammount: string;
  lastTransactionSentence: string;
  total?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  ammount,
  lastTransactionSentence,
  total,
}: CardProps) => (
  <CardContainer total={total && total}>
    <CardTitleContainer>
      <CardTitle total={total && total}>{title}</CardTitle>
      <CardLogo source={icon} />
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
