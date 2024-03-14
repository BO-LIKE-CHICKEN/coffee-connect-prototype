import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '@styles/theme';

const Text = styled(motion.p)<{ $color?: keyof typeof theme }>`
  width: 100%;

  font-size: 18px;
  font-weight: 500;
  color: ${({ $color, theme }) => ($color ? theme[$color] : theme.black)};
`;

export default Text;
