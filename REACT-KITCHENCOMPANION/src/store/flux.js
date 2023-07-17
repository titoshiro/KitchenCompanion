const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'John Doe',
            username: '',
            password: '',
            users: null,
        },
        actions: {
            saludo: () => {
                console.log("Hola Mundo");
            },
            setColor: (color) => {
                setStore({
                    color: color
                })
            },
            setName: (value) => {
                setStore({
                    name: value
                })
            },
            login: () => {},
            logout: () => {},
        }
    }
}

export default getState;