import React from 'react';
import Image from 'next/image';
import Title from '@common/components/Title';
import Text from '@common/components/Text';
import { containerVariants, itemVariants } from '@common/constants';
import Base from '../Base';
import * as S from './styles';

type Props = { title: string; description?: string };

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

const Error = ({ title, description }: Props) => {
  return (
    <Base>
      <S.Container variants={containerVariants} initial="hidden" animate="visible">
        <Title variants={itemVariants}>{title}</Title>
        {description && (
          <Text variants={itemVariants} $color="lightGray">
            {description}
          </Text>
        )}
        <S.ImageWrapper variants={imageVariants}>
          <Image src="/images/computer_coffee.png" alt="노트북에 커피를 쏟은 청년" fill objectFit="contain" />
        </S.ImageWrapper>
      </S.Container>
    </Base>
  );
};

export default Error;
