import React, { useState, useEffect, useRef, useCallback } from 'react';

import { TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';

import { Container, TypeContainer, TypeText, InvisibleInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const TypeSelector: React.FC<InputProps> = ({ name }: InputProps) => {
  const { registerField, defaultValue = 'income', fieldName } = useField(name);
  const inputRef = useRef<any>({ value: defaultValue });
  const [selectedType, setSelectedType] = useState<'income' | 'outcome'>(
    'income',
  );

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleTypeSelection = useCallback((type: 'income' | 'outcome') => {
    setSelectedType(type);
    inputRef.current.value = type;
  }, []);

  return (
    <Container>
      <TypeContainer
        type="income"
        selectedType={selectedType}
        onPress={() => handleTypeSelection('income')}
      >
        <Income />
        <TypeText>Income</TypeText>
      </TypeContainer>
      <TypeContainer
        type="outcome"
        selectedType={selectedType}
        onPress={() => handleTypeSelection('outcome')}
      >
        <Outcome />
        <TypeText>Outcome</TypeText>
      </TypeContainer>

      <InvisibleInput ref={inputRef} defaultValue={defaultValue} />
    </Container>
  );
};

export default TypeSelector;
