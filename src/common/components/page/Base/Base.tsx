import React from 'react';
import Head from 'next/head';
import { useHeight } from '@common/hooks';
import * as S from './styles';

const pageTransition = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -200 },
};

const Base = ({ children }: { children: React.ReactNode }) => {
  const height = useHeight();

  return (
    <>
      <Head>
        <title>커피 한 잔할래요?</title>
        <meta name="description" content="커피 한 잔 하며 소통하는 시간을 가져보세요." />
      </Head>
      <S.Main
        $height={height}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <S.Container $height={height}>{children}</S.Container>
      </S.Main>
    </>
  );
};

export default Base;
