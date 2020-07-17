import styled from 'styled-components/native';

import { FlatList } from 'react-native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 32px;
`;

export const DashboardBody = styled.View`
  margin-top: -160px;
`;

export const CardScroll = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 8,
    paddingRight: 32,
  },
  showsHorizontalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  line-height: 30px;

  color: #000;

  margin-top: 40px;
  margin-left: 24px;
`;

export const TransactionList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  margin: 0 auto;
`;

export const Footer = styled.View`
  width: 100%;
  margin-bottom: 64px;
`;
