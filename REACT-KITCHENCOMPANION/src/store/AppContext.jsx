import { createContext, useEffect, useState } from "react";
import getState from "./flux";

export const AppContext = createContext(null);

const injectContext = (Component) => {
    const StoreWrapper = (props) => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore), // { a: 8, b: 6}
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
            state.actions.saludo();
        }, [])

        return (
            <AppContext.Provider value={state}>
                <Component />
            </AppContext.Provider>
        )
    }

    return StoreWrapper;
}

export default injectContext;