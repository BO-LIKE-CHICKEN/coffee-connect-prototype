import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  right: 0;
  bottom: 20px;
  left: 0;

  width: 100%;
  height: auto;
  height: 58px;
  padding: 0 20px;
`;

export const Button = styled(motion.button)`
  width: 100%;
  padding: 16px 20px;

  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};

  background-color: ${({ theme }) => theme.primary};
  border-radius: 50px;

  :disabled {
    opacity: 0.3;
  }

  transition: 0.5s ease-in-out;
`;
