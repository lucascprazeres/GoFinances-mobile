import React, { useRef } from 'react';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TypeSelector from '../../components/TypeSelector';
import Navigator from '../../components/Navigator';

import { Container, Content, Title, Button, ButtonText } from './styles';

const FormPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <Container>
        <Header small />

        <Content>
          <Title>Cadastro</Title>

          <Form ref={formRef} onSubmit={() => {}}>
            <Input name="Nome" />
            <Input name="Preço" />
            <TypeSelector />
            <Input name="Categoria" />
            <Button>
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
