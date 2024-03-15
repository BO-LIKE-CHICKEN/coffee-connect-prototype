import React from 'react';
import Title from '@common/components/Title';
import Text from '@common/components/Text';
import FloatButton from '@common/components/Button/FloatButton';
import { useForm } from '@common/hooks/useForm';
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from '@common/constants';
import Base from '../../Base';
import * as S from './styles';

const JobGroup = () => {
  const { name, content, setContent } = useForm();

  return (
    <Base>
      <S.Container variants={CONTAINER_VARIANTS} initial="hidden" animate="visible">
        <Title variants={ITEM_VARIANTS}>{name}님 어떤 이야기를 나눌까요?</Title>
        <Text $color="black" variants={ITEM_VARIANTS}>
          어떤 주제로 이야기를 나누고싶은지
          <br />
          상대방에게 알려주세요
        </Text>
        <S.TextAreaContainer variants={ITEM_VARIANTS}>
          <S.TextArea value={content} onChange={setContent} placeholder="예) 이직 관련한 이야기를 나누고 싶어요!" />
        </S.TextAreaContainer>
        <FloatButton href="/complete" type="link" disabled={!content}>
          제출하기
        </FloatButton>
      </S.Container>
    </Base>
  );
};

export default JobGroup;
