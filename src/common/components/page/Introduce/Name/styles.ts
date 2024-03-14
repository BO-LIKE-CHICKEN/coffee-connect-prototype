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
  height: calc((100vw - 40px) / 400 * 332);
  margin-top: 28px;
`;

export const Input = styled(motion.input)`
  width: 100%;
  height: 58px;
  padding: 0 20px;

  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  outline: none;
`;
