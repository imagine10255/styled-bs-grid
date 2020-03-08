// @flow
import React from 'react';
import styled, {css} from 'styled-components';
import {ContainerProps} from './types';

import {themeName} from '../ThemeProvider/ThemeProvider';
import media from '../../media';
import getDataName from './getDataName';

const generateWidthMaxMedia = props => {
    return Object.keys(props.theme[themeName].breakpoints).map(sizeName => {
        return media[sizeName]`
                max-width: ${props.theme[themeName].breakpoints[sizeName]}px;
            `;
    });
};

/**
 * Row Component
 */
const Container = styled.div.attrs(props  => ({
    'data-bs': getDataName(props),
    'data-grid': 'container',
}))`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  
  ${props => css`
     padding-right: ${props.theme[themeName].padding}px;
     padding-left: ${props.theme[themeName].padding}px;
     
     
     ${!props.fluid && css`
        ${generateWidthMaxMedia(props)};
    `}
  
 `}
`;

export default (props: ContainerProps) => <Container {...props}/>;

