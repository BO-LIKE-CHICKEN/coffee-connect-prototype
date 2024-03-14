import styled from '@emotion/styled';
import { ValueOf } from '@common/custom-types';
import { theme } from '@styles/theme';

const Title = styled.h1<{ $color?: ValueOf<typeof theme> }>`
  width: 100%;

  font-size: 22px;
  text-align: left;
`;

export default Title;
