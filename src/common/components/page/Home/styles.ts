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
  height: 100vw;
  margin-top: 28px;
`;
