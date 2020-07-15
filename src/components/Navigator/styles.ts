import styled, { css } from 'styled-components/native';

interface NavigatorProps {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 56px;

  position: absolute;
  bottom: 0;

  background-color: #fff;
`;

export const LinkContainer = styled.TouchableOpacity<NavigatorProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100px;
  height: 100%;

  ${props =>
    props.active
      ? css`
          border-bottom-width: 3px;
          border-bottom-color: #ff872c;
        `
      : ''}
`;

export const LinkIcon = styled.Image``;

export const LinkText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;

  color: #363f5f;
`;
