import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalCSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const GlobalStyle: React.FC = () => <Global styles={GlobalCSS} />;
