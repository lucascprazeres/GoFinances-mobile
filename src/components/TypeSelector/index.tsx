import React, { useState, useCallback } from 'react';

import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';

import { Container, TypeContainer, TypeText } from './styles';

const TypeSelector: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'income' | 'outcome'>(
    'income',
  );

  return (
    <Container>
      <TypeContainer
        type="income"
        selectedType={selectedType}
        onPress={() => setSelectedType('income')}
      >
        <Income />
        <TypeText>Income</TypeText>
      </TypeContainer>
      <TypeContainer
        type="outcome"
        selectedType={selectedType}
        onPress={() => setSelectedType('outcome')}
      >
        <Outcome />
        <TypeText>Outcome</TypeText>
      </TypeContainer>
    </Container>
  );
};

export default TypeSelector;
