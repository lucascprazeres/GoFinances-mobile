import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import dollarIcon from '../../assets/vendas.png';
import listIcon from '../../assets/listagem.png';

import { Container, LinkContainer, LinkIcon, LinkText } from './styles';

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
  return (
    <Container style={additionalStyle}>
      <LinkContainer
        active={currentActivateLink === 'Dashboard'}
        onPress={() => handleNavigation('Dashboard')}
      >
        <LinkIcon source={listIcon} />
        <LinkText>Listagem</LinkText>
      </LinkContainer>

      <LinkContainer
        active={currentActivateLink === 'FormPage'}
        onPress={() => handleNavigation('FormPage')}
      >
        <LinkIcon source={dollarIcon} />
        <LinkText>Cadastrar</LinkText>
      </LinkContainer>
    </Container>
  );
};

export default Navigator;
