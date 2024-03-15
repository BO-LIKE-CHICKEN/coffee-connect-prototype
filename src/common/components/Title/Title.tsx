import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '@styles/theme';

const Title = styled(motion.h1)<{ $color?: keyof typeof theme; $textAlginCenter?: boolean }>`
  width: 100%;

  font-size: 22px;
  color: ${({ $color, theme }) => ($color ? theme[$color] : theme.black)};
  text-align: ${({ $textAlginCenter }) => ($textAlginCenter ? 'center' : 'left')};
`;

export default Title;
