import { createStore, useTreble, useScopedTreble } from 'treble-gsm';

const Context = useScopedTreble();

export const useSearchAPIStore = () => useTreble(Context);

export const Store = createStore([
    {
        action: 'updateSearchQuery',
        state: {
            searchQuery: ''
        }
    }
], {
    context: Context
});

