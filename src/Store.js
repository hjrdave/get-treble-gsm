import { createStore } from 'treble-gsm';

const Store = createStore([
    {
        action: 'updateActiveNavPath',
        state: { activeNavPath: '/' }
    },
    {
        action: 'updateMobileDocNavState',
        state: { mobileDocNavState: false }
    },
    {
        action: 'updateAPINavPostData',
        state: {
            apiNavPostData: []
        }
    },
    {
        action: 'updateAPINavItemState',
        state: {
            apiNavItemState: {
                activeSection: '',
                activeItem: ''
            }
        }
    }
]);

export default Store;