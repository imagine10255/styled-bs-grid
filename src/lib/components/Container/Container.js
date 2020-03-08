// @flow
import React from 'react';
import styled, {css} from 'styled-components';
import {ContainerProps} from './types';

import {themeName} from '../../config';
import media from '../../media';
import getDataName from './getDataName';

const generateWidthMaxMedia = props => {
    return Object.keys(props.theme[themeName].gridBreakpoints).map(sizeName => {
        return media[sizeName]`
                max-width: ${props.theme[themeName].gridBreakpoints[sizeName]}px;
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
     padding-right: ${props.theme[themeName].gridGutterWidth}px;
     padding-left: ${props.theme[themeName].gridGutterWidth}px;
     
     
     ${!props.fluid && css`
        ${generateWidthMaxMedia(props)};
    `}
  
 `}
`;

export default (props: ContainerProps) => <Container {...props}/>;

