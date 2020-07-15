import React from 'react';

import Navigator from '../../components/Navigator';

import Header from '../../components/Header';

import { Container } from './styles';

const FormPage: React.FC = () => {
  return (
    <>
      <Container>
        <Header small />
      </Container>
      <Navigator currentPage="FormPage" />
    </>
  );
};

export default FormPage;
