import React from 'react';
import Image from 'next/image';
import Title from '@common/components/Title';
import Text from '@common/components/Text';
import FloatButton from '@common/components/Button/FloatButton';
import { useForm } from '@common/hooks/useForm';
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from '@common/constants';
import Base from '../../Base';
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

const Name = () => {
  const { name, setName } = useForm();

  return (
    <Base>
      <S.Container variants={CONTAINER_VARIANTS} initial="hidden" animate="visible">
        <Title variants={ITEM_VARIANTS}>제 이름을 알려드릴게요</Title>
        <Text variants={ITEM_VARIANTS}>이름이 아닌 닉네임으로 불러주셔도 좋아요</Text>
        <S.ImageWrapper variants={imageVariants}>
          <Image src="/images/tv_panel_quiz_man.png" alt="커피잔 놀이기구에 탄 남녀" fill objectFit="contain" />
        </S.ImageWrapper>
        <S.Input placeholder="홍길동" variants={ITEM_VARIANTS} value={name} onChange={setName} />
        <FloatButton href="/introduce/job-group" type="link" disabled={!(name.length > 0)}>
          다음
        </FloatButton>
      </S.Container>
    </Base>
  );
};

export default Name;
