import React from 'react';
import { useRouter } from 'next/router';
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from '@common/constants';
import Title from '@common/components/Title';
import Text from '@common/components/Text';
import Base from '../Base';
import * as S from './styles';

const Hello = () => {
  const router = useRouter();

  const { query } = router;

  return (
    <Base>
      <S.Container variants={CONTAINER_VARIANTS} initial="hidden" animate="visible">
        <Title variants={ITEM_VARIANTS}>이번 커피챗에 응해주셔서 감사합니다!</Title>
        <Text variants={ITEM_VARIANTS}>
          저는{' '}
          <b>
            {query.jobGroup} {query.name}
          </b>
          이라고 합니다.
          <br /> 아래의 내용으로 대화나누고 싶어요!
        </Text>
        <div style={{ marginTop: 10 }} />
        <Text variants={ITEM_VARIANTS}>{query.content}</Text>
      </S.Container>
    </Base>
  );
};

export default Hello;
