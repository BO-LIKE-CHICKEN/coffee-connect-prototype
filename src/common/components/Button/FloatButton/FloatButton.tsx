import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import * as S from './styles';

type BaseProps = { disabled?: boolean };

type ButtonProps = BaseProps & { onClick: () => void; type: 'button'; href?: never };

type LinkProps = BaseProps & { href: string; type: 'link'; onClick?: never };

type Props = LinkProps | ButtonProps;

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const FloatButton = ({ children, disabled, onClick, type, href }: PropsWithChildren<Props>) => {
  if (type === 'link') {
    return (
      <S.Container variants={variants}>
        <Link href={href}>
          <S.Button disabled={disabled} whileTap={{ scale: 1.05 }} onClick={onClick}>
            {children}
          </S.Button>
        </Link>
      </S.Container>
    );
  }

  return (
    <S.Container variants={variants}>
      <S.Button disabled={disabled} whileTap={{ scale: 1.05 }} onClick={onClick}>
        {children}
      </S.Button>
    </S.Container>
  );
};

export default FloatButton;
