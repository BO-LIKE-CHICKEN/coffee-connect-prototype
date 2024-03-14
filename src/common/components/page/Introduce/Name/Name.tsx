import React from 'react';
import Image from 'next/image';
import Title from '@common/components/Title';
import Text from '@common/components/Text';
import FloatButton from '@common/components/Button/FloatButton';
import { useForm } from '@common/hooks/useForm';
import Base from '../../Base';
import * as S from './styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    duration: 0.3,
  },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.5 },
    },
  },
};

const Name = () => {
  const { name, setName } = useForm();

  return (
    <Base>
      <S.Container variants={containerVariants} initial="hidden" animate="visible">
        <Title variants={itemVariants}>당신의 이름을 알려주세요</Title>
        <Text variants={itemVariants}>혹시 다른 호칭으로 불러드리는게 좋을까요?</Text>
        <S.ImageWrapper variants={imageVariants}>
          <Image src="/images/tv_panel_quiz_man.png" alt="커피잔 놀이기구에 탄 남녀" fill objectFit="contain" />
        </S.ImageWrapper>
        <S.Input placeholder="홍길동" variants={itemVariants} value={name} onChange={setName} />
        <FloatButton href="/introduce/interests" type="link" disabled={!(name.length > 0)}>
          다음
        </FloatButton>
      </S.Container>
    </Base>
  );
};

export default Name;
