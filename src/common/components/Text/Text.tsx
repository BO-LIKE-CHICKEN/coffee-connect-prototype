import styled from '@emotion/styled';
import { ValueOf } from '@common/custom-types';
import { theme } from '@styles/theme';

const Text = styled.p<{ $color?: ValueOf<typeof theme> }>`
  font-size: 18px;
`;

export default Text;
