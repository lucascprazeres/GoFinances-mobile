import React, { useRef, useCallback } from 'react';
import { TextInput, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TypeSelector from '../../components/TypeSelector';
import Navigator from '../../components/Navigator';

import { Container, Content, Title, Button, ButtonText } from './styles';

import api from '../../services/api';

interface FormdData {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

const FormPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const valueInputRef = useRef<TextInput>(null);
  const categoryInputRef = useRef<TextInput>(null);

  const navigator = useNavigation();

  const handleFormSubmit = useCallback(async (data: FormData) => {
    console.log(data);

    await api.post('transactions', data);

    Alert.alert(
      'Transação realizada com sucesso!',
      'Você pode verificar as informações dela na página inicial!',
    );

    navigator.goBack();
  }, []);

  return (
    <>
      <Container>
        <Header small />

        <Content>
          <Title>Cadastro</Title>

          <Form ref={formRef} onSubmit={handleFormSubmit}>
            <Input
              name="title"
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => valueInputRef.current?.focus()}
            />
            <Input
              ref={valueInputRef}
              name="value"
              placeholder="Preço"
              returnKeyType="next"
              onSubmitEditing={() => categoryInputRef.current?.focus()}
            />
            <TypeSelector name="type" />
            <Input
              ref={categoryInputRef}
              name="category"
              placeholder="Categoria"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
            <Button onPress={() => formRef.current?.submitForm()}>
              <ButtonText>Enviar</ButtonText>
            </Button>
          </Form>
        </Content>
      </Container>
      <Navigator currentPage="FormPage" />
    </>
  );
};

export default FormPage;
