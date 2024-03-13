import { css } from '@emotion/react';
import normalize from 'emotion-normalize';
import { pretendard } from './fonts';

export const globalStyles = css`
  ${normalize}
  * {
    box-sizing: border-box;

    padding: 0;
    margin: 0;

    font-family: ${pretendard.style.fontFamily}, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  }

  body {
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:visited,
  a:focus,
  a:active {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  button {
    padding: 0;

    cursor: pointer;

    background-color: unset;
    border: unset;
    outline: unset;
  }

  input: {
    box-shadow: none;
  }
`;
