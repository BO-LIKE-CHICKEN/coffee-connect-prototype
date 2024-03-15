import React from 'react';
import QRCode from 'react-qr-code';
import Title from '@common/components/Title';
import FloatButton from '@common/components/Button/FloatButton';
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from '@common/constants';
import { useForm } from '@common/hooks/useForm';
import Text from '@common/components/Text';
import Base from '../Base';
import * as S from './styles';

type Props = {
  currentDomain: string;
};

const Complete = ({ currentDomain }: Props) => {
  const { name, form } = useForm();

  const params = new URLSearchParams(form);

  const queryString = params.toString(); // "name=John%20Doe&age=30"

  const url = `${currentDomain}/complete?${queryString}`;

  return (
    <Base>
      <S.Container variants={CONTAINER_VARIANTS} initial="hidden" animate="visible">
        <Title variants={ITEM_VARIANTS}>{name}님 고생하셨어요 🥳</Title>
        <Text $color="black" variants={ITEM_VARIANTS}>
          아래의 QR코드를 사용해서 내용을 공유해주세요
        </Text>
        <S.QRContainer variants={ITEM_VARIANTS}>
          <QRCode value={url} />
        </S.QRContainer>
        <FloatButton href="/" type="link">
          다시하기
        </FloatButton>
      </S.Container>
    </Base>
  );
};

export default Complete;
