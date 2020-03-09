// @flow
export type Column = number | true | 'auto';

export type ColProps = {
  noGutter?: boolean;
  col?: Column;
  xs?: Column;
  sm?: Column;
  md?: Column;
  lg?: Column;
  xl?: Column;
  xxl?: Column;
};

export type ColCss = {
  col: any;
};
