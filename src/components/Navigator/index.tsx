import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ListSVG from '../../assets/listagem.svg';
import ActiveListSVG from '../../assets/listagem-ativada.svg';

import DollarSVG from '../../assets/dollar.svg';
import ActiveDollartSVG from '../../assets/dollar-ativado.svg';

import { Container, LinkContainer, LinkText } from './styles';

const additionalStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,

  elevation: 24,
};

interface NavigatorProps {
  currentPage: 'Dashboard' | 'FormPage';
}

const Navigator: React.FC<NavigatorProps> = ({
  currentPage,
}: NavigatorProps) => {
  const [currentActivateLink, setCurrentActivateLink] = useState<
    'Dashboard' | 'FormPage'
  >();

  useEffect(() => {
    setCurrentActivateLink(currentPage);
  }, [currentPage]);

  const navigator = useNavigation();

  function handleNavigation(page: 'Dashboard' | 'FormPage') {
    navigator.navigate(page);
  }

  const ListIcon =
    currentPage === 'Dashboard' ? <ActiveListSVG /> : <ListSVG />;

  const DollarIcon =
    currentPage === 'FormPage' ? <ActiveDollartSVG /> : <DollarSVG />;

  return (
    <Container style={additionalStyle}>
      <LinkContainer
        active={currentActivateLink === 'Dashboard'}
        onPress={() => handleNavigation('Dashboard')}
      >
        {ListIcon}
        <LinkText>Listagem</LinkText>
      </LinkContainer>

      <LinkContainer
        active={currentActivateLink === 'FormPage'}
        onPress={() => handleNavigation('FormPage')}
      >
        {DollarIcon}
        <LinkText>Cadastrar</LinkText>
      </LinkContainer>
    </Container>
  );
};

export default Navigator;
