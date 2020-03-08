// @flow

import React from 'react';
import styled, {css} from 'styled-components';
import getCss from './css';
import getDataName from './getDataName';
import media from '../../media';
import {ColProps} from './types';
import {isEmpty} from '../../utils';
import {themeName} from '../../config';

const generateGirdMedia = props => {
    // eslint-disable-next-line array-callback-return
    return Object.keys(props.theme[themeName].gridBreakpoints).map(sizeName => {
        if(!isEmpty(props[sizeName])){
            return media[sizeName]`${getCss.col(props[sizeName], props.theme[themeName].gridColumns)}}`
        }
    });
};

/**
 * Col Component
 * breakpoints sort: xs => xl
 *
 * qa: min-height=1px
 * https://css-tricks.com/make-sure-columns-dont-collapse-horizontally/
 *
 */
const Col = styled.div.attrs(props  => ({
    'data-bs': getDataName(props),
    'data-grid': 'col',
}))`
  position: relative;
  width: 100%;
  min-height: 1px;
  
  ${props => css`
     padding-right: ${props.theme[themeName].gridGutterWidth}px;
     padding-left: ${props.theme[themeName].gridGutterWidth}px;
     
     ${props.col && getCss.col(props.col, props.theme[themeName].gridColumns)};
     
     ${generateGirdMedia(props)};
 `}
  
`;

export default (props: ColProps) => <Col {...props}/>;

