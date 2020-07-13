import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: #e5e5e5;
`;

export const Header = styled.View`
  width: 100%;
  height: 270px;

  background-color: #5636d3;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;

export const Logo = styled.Image`
  width: 176px;
`;

export const Date = styled.Text`
  font-family: Poppins;
  font-size: 14px;
  line-height: 21px;

  color: #fff;
  opacity: 0.6;
`;

export const DashboardBody = styled.View`
  margin-top: -160px;
`;

export const CardScroll = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  showsHorizontalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-family: Poppins;
  font-size: 22px;
  line-height: 30px;

  color: #000;

  margin-top: 40px;
  margin-left: 24px;
`;

export const TransactionList = styled.View`
  width: 88%;
  margin: 30px 24px;
`;
