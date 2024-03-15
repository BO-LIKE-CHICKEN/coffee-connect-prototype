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

export const TextAreaContainer = styled(motion.div)`
  position: relative;

  width: 100%;
  max-width: calc(100vw - 40px);
  height: 50vh;
  margin-top: 28px;

  ::before {
    position: absolute;
    inset: 0;
    z-index: -1; /* textarea 뒤에 위치하도록 설정 */

    content: '';

    background-image: url('/images/appeal_man.png');
    background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */
    background-position: center; /* 이미지 중앙에 위치하도록 설정 */
    background-size: cover; /* 이미지가 컨테이너 전체를 커버하도록 설정 */
    opacity: 0.1; /* 반투명 효과 설정 */
  }
`;

export const TextArea = styled(motion.textarea)`
  position: relative; /* 가상 요소보다 앞에 위치하도록 설정 */
  z-index: 1;

  box-sizing: border-box;

  width: 100%; /* 컨테이너에 맞게 조절 */
  height: 100%; /* 컨테이너에 맞게 조절 */
  padding: 10px;

  resize: none;

  background: none; /* textarea 배경 투명하게 설정 */
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 14px;
  outline: none;
`;
