import { createStore } from 'treble-gsm';

const Store = createStore([
    {
        action: 'updateActiveNavPath',
        state: { activeNavPath: '/' }
    },
    {
        action: 'updateMobileDocNavState',
        state: { mobileDocNavState: false }
    }
]);

export default Store;