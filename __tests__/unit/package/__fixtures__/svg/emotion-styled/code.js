import React from 'react';
import { Svg } from 'react-optimized-image';
import styled from '@emotion/styled';
import Image from './image.svg';

const StyledSvg = styled(Svg)`
  background-color: red;
`;

export default () => (
  <div>
    <StyledSvg src={Image} />
  </div>
);
