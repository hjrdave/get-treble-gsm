import React from 'react';

export const useNonInitialEffect = (effect, deps) => {
    const initialRender = React.useRef(true);

    React.useEffect(() => {
        let effectReturns = () => { };

        if (initialRender.current) {
            initialRender.current = false;
        } else {
            effectReturns = effect();
        }

        if (effectReturns && typeof effectReturns === "function") {
            return effectReturns;
        }
    }, deps);
};

export const useNonInitialLayoutEffect = (effect, deps) => {
    const initialRender = React.useRef(true);

    React.useLayoutEffect(() => {
        let effectReturns = () => { };

        if (initialRender.current) {
            initialRender.current = false;
        } else {
            effectReturns = effect();
        }

        if (effectReturns && typeof effectReturns === "function") {
            return effectReturns;
        }
    }, deps);
};