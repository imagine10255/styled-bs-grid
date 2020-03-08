// @flow

// import {
//     FlattenInterpolation,
//     Interpolation,
//     SimpleInterpolation,
//     ThemedStyledProps,
// } from 'style d-components';
// import {Breakpoints, Theme} from '../components/ThemeProvider';

export type MediaLabels = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

// export type MediaAliases = "smaller" | "phone" | "tablet" | "desktop" | "giant" | "veryGiant";

export type Media = MediaLabels;

// export type MediaTagFunction<P extends {} = {}, T extends Theme = Theme> = (
//   strings: TemplateStringsArray | NonNullable<SimpleInterpolation>,
//   ...interpolations: Interpolation<ThemedStyledProps<P, T>>[]
// ) => FlattenInterpolation<ThemedStyledProps<P, T>>;

// export type MapMediaToQuery = { [Key:MediaLabels]: MediaTagFunction };

// export type MediaObject = MapMediaToQuery & {
//   min: MapMediaToQuery;
//   max: MapMediaToQuery;
// };

// export type GetBreakpointsFn = <P extends {} = {}>(
//   props: ThemedStyledProps<P, Theme>,
// ) => Breakpoints;
