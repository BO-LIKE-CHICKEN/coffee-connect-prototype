import styled from '@emotion/styled';
import { BREAK_POINT } from '@common/constants/breakpoint';

export const Main = styled.main<{ $height: number }>`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 100%;
  min-height: ${({ $height }) => $height}px;
`;

export const Container = styled.section`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 100%;
  padding: 0 20px;

  @media screen and (${BREAK_POINT.PC}) {
    max-width: 720px;
  }
`;