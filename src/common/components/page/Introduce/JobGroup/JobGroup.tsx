import React, { useState } from 'react';
import Image from 'next/image';
import Title from '@common/components/Title';
import Text from '@common/components/Text';
import FloatButton from '@common/components/Button/FloatButton';
import { useForm } from '@common/hooks/useForm';
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from '@common/constants';
import { JOB_GROUPS, JOB_GROUP_LABEL } from '@common/constants/jobGroup';
import Base from '../../Base';
import * as S from './styles';

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    rotate: [0, 5, 0],
    transition: {
      opacity: { duration: 0.5 },
      rotate: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

const JobGroup = () => {
  const { name, jobGroup, setJobGroup } = useForm();

  const [index, setIndex] = useState(0);

  const currentGroup = JOB_GROUPS[index];

  const { label, value, src } = currentGroup;

  const handleBackButtonClick = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      return;
    }
  };

  const handleNextButtonClick = () => {
    if (JOB_GROUPS.length > index) {
      setIndex((prev) => prev + 1);
      return;
    }
  };

  return (
    <Base>
      <S.Container variants={CONTAINER_VARIANTS} initial="hidden" animate="visible">
        <Title variants={ITEM_VARIANTS}>{name}님은 어떤 일을 하시나요? </Title>
        <Text $color="black" variants={ITEM_VARIANTS}>
          <strong>{label}</strong>라면 강아지를 눌러주세요!
        </Text>
        <S.ImageWrapper variants={ITEM_VARIANTS} key={index}>
          <Image src={src} alt="커피잔 놀이기구에 탄 남녀" fill objectFit="contain" />
        </S.ImageWrapper>
        <S.ButtonContainer variants={ITEM_VARIANTS}>
          <S.Button
            initial={{ rotate: 180 }}
            whileTap={{ scale: 1.1 }}
            onClick={handleBackButtonClick}
            disabled={index === 0}
          >
            <Image src="/images/fabric_mark_arrow.png" alt="커피잔 놀이기구에 탄 남녀" objectFit="contain" fill />
          </S.Button>
          <S.Button variants={imageVariants} whileTap={{ scale: 1.3 }} onClick={setJobGroup(value)}>
            <Image src="/images/ok_dog.png" alt="커피잔 놀이기구에 탄 남녀" objectFit="contain" fill />
          </S.Button>
          <S.Button
            whileTap={{ scale: 1.1 }}
            onClick={handleNextButtonClick}
            disabled={JOB_GROUPS.length - 1 === index}
          >
            <Image src="/images/fabric_mark_arrow.png" alt="커피잔 놀이기구에 탄 남녀" objectFit="contain" fill />
          </S.Button>
        </S.ButtonContainer>
        <FloatButton href="/introduce/comment" type="link" disabled={!jobGroup}>
          {jobGroup ? `${JOB_GROUP_LABEL[jobGroup]}로 시작` : '직군을 선택해주세요'}
        </FloatButton>
      </S.Container>
    </Base>
  );
};

export default JobGroup;
