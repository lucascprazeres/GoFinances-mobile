import styled from 'styled-components/native';

interface CardProps {
  total?: boolean;
}

export const CardContainer = styled.View`
  width: 300px;
  height: 200px;

  margin-left: 16px;

  background-color: ${({ total }: CardProps) => (total ? '#ff872c' : '#fff')};
  border-radius: 5px;
`;

export const CardTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  margin-top: 20px;
`;

export const CardTitle = styled.Text`
  font-family: Poppins;
  font-size: 16px;
  line-height: 21px;

  color: ${({ total }: CardProps) => (total ? '#fff' : '#363f5f')};

  margin-left: 24px;
`;

export const CardLogo = styled.Image`
  margin-right: 20px;
`;

export const AmmountContainer = styled.View`
  margin-left: 24px;
  margin-top: 32px;
`;

export const Ammount = styled.Text`
  font-family: Poppins;
  font-size: 30px;
  line-height: 45px;

  color: ${({ total }: CardProps) => (total ? '#fff' : '#363f5f')};
`;

export const LastTransaction = styled.Text`
  font-family: Poppins;
  font-size: 14px;
  line-height: 18px;

  color: ${({ total }: CardProps) => (total ? '#fff' : '#969cb3')};
`;
