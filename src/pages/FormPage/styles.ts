import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  width: 88%;
  margin: 24px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  line-height: 30px;
  color: #000;

  margin-bottom: 24px;
`;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  background-color: #ff872c;

  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;

  color: #fff;
`;
