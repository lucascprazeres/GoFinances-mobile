import styled from 'styled-components/native';

import { FlatList } from 'react-native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
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

export const TransactionList = styled(FlatList)`
  width: 88%;
  margin: 30px 24px;
`;
