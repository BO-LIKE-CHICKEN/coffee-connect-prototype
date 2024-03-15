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
  height: 50vh;
  margin: 14px 0;
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;

  justify-content: space-around;

  width: 100%;
`;

export const Button = styled(motion.button)<{ $rotate?: number }>`
  position: relative;

  width: 100px;
  height: 100px;

  :disabled {
    opacity: 0.5;
  }
`;
