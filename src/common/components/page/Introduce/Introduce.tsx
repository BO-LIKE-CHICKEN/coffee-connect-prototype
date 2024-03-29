import React from 'react';
import Image from 'next/image';
import Title from '@common/components/Title';
import FloatButton from '@common/components/Button/FloatButton';
import Text from '@common/components/Text';
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from '@common/constants';
import Base from '../Base';
import * as S from './styles';

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.5 },
    },
  },
};

const Introduce = () => {
  return (
    <Base>
      <S.Container variants={CONTAINER_VARIANTS} initial="hidden" animate="visible">
        <Title variants={ITEM_VARIANTS}>먼저, 저를 소개해드릴게요</Title>
        <Text variants={ITEM_VARIANTS}>저는 이런 사람이에요</Text>
        <S.ImageWrapper variants={imageVariants}>
          <Image src="/images/coffee_self_service_woman.png" alt="커피잔 놀이기구에 탄 남녀" fill objectFit="contain" />
        </S.ImageWrapper>
        <FloatButton href="/introduce/name" type="link">
          다음
        </FloatButton>
      </S.Container>
    </Base>
  );
};

export default Introduce;
