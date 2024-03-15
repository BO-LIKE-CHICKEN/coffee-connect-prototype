import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '@styles/theme';

const Text = styled(motion.p)<{ $color?: keyof typeof theme; $textAlginCenter?: boolean; $fontSize?: number }>`
  width: 100%;

  font-size: ${({ $fontSize }) => $fontSize ?? 18}px;
  font-weight: 500;
  color: ${({ $color, theme }) => ($color ? theme[$color] : theme.black)};
  text-align: ${({ $textAlginCenter }) => ($textAlginCenter ? 'center' : 'left')};
  word-break: break-word;
`;

export default Text;
