import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Title = styled.h1<{ $color?: keyof typeof theme }>`
  width: 100%;

  font-size: 22px;
  color: ${({ $color, theme }) => ($color ? theme[$color] : theme.black)};
  text-align: left;
`;

export default Title;
