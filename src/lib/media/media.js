// @flow
import {css, CSSObject} from 'styled-components';
import {Media} from './types';

const defaultBreakpoints = {
    xxl: 1540,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
};

const getBreakpoints = props => ({
    ...defaultBreakpoints,
    ...((props.theme &&
        props.theme.styledBootstrapGrid &&
        props.theme.styledBootstrapGrid.breakpoints) ||
        {}),
});

// console.log('defaultBreakpoints', defaultBreakpoints, (Object.keys(defaultBreakpoints) as Media[]));

const media = (Object.keys(defaultBreakpoints)).reduce(
    (accumulator, label) => {
        const minMedia = (strings, ...interpolations) => css`
      @media (min-width: ${props => getBreakpoints(props)[label]}px) {
        ${css(strings, ...interpolations)}
      }
    `;
        console.log('minMedia', minMedia);

        const maxMedia = (strings, ...interpolations) => css`
      @media (max-width: ${props => getBreakpoints(props)[label]}px) {
        ${css(strings, ...interpolations)}
      }
    `;

        accumulator[label] = label === 'xs' || label === 'smaller' ? maxMedia : minMedia;
        accumulator.max[label] = maxMedia;
        accumulator.min[label] = minMedia;

        return accumulator;
    },
    {min: {}, max: {}},
);

export default media;
