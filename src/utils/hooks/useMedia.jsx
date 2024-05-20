import { useState, useEffect, useLayoutEffect } from 'react';

const QUERY_COMBINATOR = ' and ';

function camelToHyphen(camelString) {
    return camelString
        .replace(/[A-Z]/g, (string) => `-${string.toLowerCase()}`)
        .toLowerCase();
}

function noop() {}

function queryObjectToString(query) {
    if (typeof query === 'string') {
        return query;
    }

    return Object.entries(query)
        .map(([feature, value]) => {
            const convertedFeature = camelToHyphen(feature);
            let convertedValue = value;

            if (typeof convertedValue === 'boolean') {
                return convertedValue
                    ? convertedFeature
                    : `not ${convertedFeature}`;
            }

            if (
                typeof convertedValue === 'number' &&
                /[height|width]$/.test(convertedFeature)
            ) {
                convertedValue = `${convertedValue}px`;
            }

            return `(${convertedFeature}: ${convertedValue})`;
        })
        .join(QUERY_COMBINATOR);
}

export const mockMediaQueryList = {
    media: '',
    matches: false,
    onchange: noop,
    addListener: noop,
    removeListener: noop,
    addEventListener: noop,
    removeEventListener: noop,
    dispatchEvent: () => true,
};

const createUseMedia =
    (effect) =>
    (rawQuery, defaultState = false) => {
        const [state, setState] = useState(defaultState);
        const query = queryObjectToString(rawQuery);

        effect(() => {
            let mounted = true;
            const mediaQueryList =
                typeof window === 'undefined'
                    ? mockMediaQueryList
                    : window.matchMedia(query);

            const onChange = () => {
                if (!mounted) {
                    return;
                }

                setState(Boolean(mediaQueryList.matches));
            };

            mediaQueryList.addListener(onChange);
            setState(mediaQueryList.matches);

            return () => {
                mounted = false;
                mediaQueryList.removeListener(onChange);
            };
        }, [query]);

        return state;
    };

export const useMedia = createUseMedia(useEffect);
export const useMediaLayout = createUseMedia(useLayoutEffect);

export default useMedia;
