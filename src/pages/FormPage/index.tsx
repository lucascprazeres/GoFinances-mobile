import React from 'react';

import Navigator from '../../components/Navigator';

import { Container } from './styles';

const FormPage: React.FC = () => {
  return (
    <>
      <Container />
      <Navigator currentPage="FormPage" />
    </>
  );
};

export default FormPage;
