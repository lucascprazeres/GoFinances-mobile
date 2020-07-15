import styled from 'styled-components/native';

interface HeaderProps {
  small?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${({ small }: HeaderProps) => (small ? '90px' : '270px')};

  background-color: #5636d3;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;
`;

export const Logo = styled.Image`
  width: 176px;
`;

export const Date = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 21px;

  color: #fff;
  opacity: 0.6;
`;
