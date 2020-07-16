import styled, { css } from 'styled-components/native';

interface TypeSelectorProps {
  type: 'income' | 'outcome';
  selectedType: 'income' | 'outcome';
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;

  margin-bottom: 16px;
`;

export const TypeContainer = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ type, selectedType }: TypeSelectorProps) => {
    if (type === selectedType && type === 'income') {
      return css`
        background-color: rgba(18, 164, 84, 0.1);
      `;
    }

    if (type === selectedType && type === 'outcome') {
      return css`
        background-color: rgba(232, 63, 91, 0.1);
      `;
    }
  }}
`;

export const TypeText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;

  margin-left: 14px;

  color: #363f5f;
`;

export const InvisibleInput = styled.TextInput`
  display: none;
`;
