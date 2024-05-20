import React from 'react';
import { useMedia } from '../hooks/useMedia';

export function withMedia(media, Component) {
    const WrappedComponent = (hocProps) => {
        const isRender = useMedia(media);

        return isRender ? <Component {...hocProps} /> : null;
    };

    WrappedComponent.displayName = `WithMedia(${
        Component.displayName || Component.name || 'Component'
    })`;

    return WrappedComponent;
}
