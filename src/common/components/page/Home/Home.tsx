import React from 'react';
import Image from 'next/image';
import Title from '@common/components/Title';
import Text from '@common/components/Text';
import FloatButton from '@common/components/Button/FloatButton';
import Base from '../Base';
import * as S from './styles';

const Home = () => {
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
      rotate: [0, 3, 0, -3, 0],
      transition: {
        opacity: { duration: 0.5 },
        rotate: {
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <Base>
      <S.Container variants={containerVariants} initial="hidden" animate="visible">
        <Title variants={itemVariants}>커피 한 잔 할래요?</Title>
        <Text variants={itemVariants}>당신의 이야기를 듣고 싶어요</Text>
        <S.ImageWrapper variants={imageVariants}>
          <Image src="/images/coffee_cup_slow.png" alt="커피잔 놀이기구에 탄 남녀" fill objectFit="contain" />
        </S.ImageWrapper>
        <FloatButton href="/introduce" type="link">
          다음
        </FloatButton>
      </S.Container>
    </Base>
  );
};

export default Home;
