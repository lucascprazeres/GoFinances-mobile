import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

import { useField } from '@unform/core';

import { TextInputProps } from 'react-native';

import { StyledInput } from './styles';

interface InputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name }: InputProps) => {
  return <StyledInput placeholder={name} />;
};

export default Input;
