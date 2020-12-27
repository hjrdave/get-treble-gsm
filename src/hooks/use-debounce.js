import React from 'react';

const useDebounce = (fn, delay) => {

    let debouncedFn = (fn, delay) => {
        let timeout;
        return function (...args) {
            const context = this;
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                timeout = null;
                fn.apply(context, args);
            }, delay);
        };
    };

    return React.useCallback(debouncedFn((...args) => fn(...args), delay), [delay]);;

}

export default useDebounce;