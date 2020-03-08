// @flow

// import { MakeAliases } from './types';
// import { Media, MediaLabels, MediaAliases } from '../media/types';

const makeAliases = (breakpoints = {}) => {
    // console.log('breakpoints', breakpoints);

    const data = Object.assign({}, breakpoints);
    // const breakpointsKeys2 = Object.keys(breakpoints) as Media[];
    const breakpointsKeys = Object.keys(breakpoints);

    // console.log('breakpointsKeys', breakpointsKeys);
    // breakpointsKeys.forEach((key: Media) => {
    breakpointsKeys.forEach((key: any) => {
        // const key1 = key as keyof typeof MediaLabels;
        // const key2 = key;
        // const key2 = key;

        // console.log('key1', key1, MediaLabels);
        // console.log('key2', key2, MediaAliases);
        // if (MediaLabels[key1]) {
        //   data[MediaLabels[key1]] = breakpoints[key];
        // }
        //
        // if (MediaAliases[key2] && !data[MediaAliases[key2]]) {
        //   data[MediaAliases[key2]] = breakpoints[key];
        // }
        if(data[key]){
            data[key] = breakpoints[key];
        }
    });

    console.log('data', data);

    return data;
};

export default makeAliases;
