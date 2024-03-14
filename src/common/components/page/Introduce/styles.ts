import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const ImageWrapper = styled(motion.div)`
  position: relative;

  width: 100%;
  height: calc(100vw - 40px / 800 * 694);
  margin-top: 28px;
`;
