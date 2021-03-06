// @flow

import React from 'react';
// eslint-disable-next-line import/no-unresolved
import styled, {css} from 'styled-components';
import {RowProps} from './types';
import getDataName from './getDataName';
import {themeName} from '../../config';

/**
 * Get Row Margin
 * @param props
 * @returns {*}
 */
const getRowMargin = props => {
    return props.noGutters ? 0: `-${props.theme[themeName].gridGutterWidth}px`;
};

/**
 * Row Component
 */
const Row = styled.div.attrs(props  => ({
    'data-grid': 'row',
    'data-debug': getDataName(props),
}))`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  
  ${props => css`
     margin-right: ${getRowMargin(props)};
     margin-left: ${getRowMargin(props)};
     
     ${props.noGutters && css`
        >[data-grid=col]{
            padding-right: 0;
            padding-left: 0;
        }
     `}
 `}
`;

export default (props: RowProps) => <Row {...props}/>;

