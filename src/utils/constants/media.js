export const MOBILE = 360;
export const TABLET = 768;
export const DESKTOP = 1440;

export const MIN_MEDIA = {
    MOBILE: `(min-width: ${MOBILE}px)`,
    TABLET: `(min-width: ${TABLET}px)`,
};

export const MAX_MEDIA = {
    MOBILE: `(max-width: ${MOBILE - 1}px)`,
    TABLET: `(max-width: ${TABLET - 1}px)`,
};
