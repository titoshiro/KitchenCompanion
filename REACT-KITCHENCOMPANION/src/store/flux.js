const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            Username: '',
            email: '',
            password: '',
            sessionToken: '',
            
        },
        actions: {
            handleChange: (e) => {
                const {name, value } = e.targe;
                setStore = (prevData) => ({
                    ...prevData,
                    [name]: value
                })
            },

            setSessionToken: (token) => {
                setStore({
                    sessionToken: token
                })
            },

            setColor: (color) => {
                setStore({
                    color: color
                })
            },

            setUsername: (value) => {
                setStore({
                    Username: value
                })
            },

            setPassword: (value) => {
                setStore({
                    password: value
                })
            },

            setEmail: (value) => {
                setStore({
                    email: value
                })
            },

            login: (e) => {
                    e.preventDefault();   
                    fetch('http://localhost:5000/api/login', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ email, password }),
                    })
                      .then((response) => {
                        if (response.ok) {
                            setStore ({token: response.access_token})
                            setStore ({user: response.user})
                          navigate('/');
                        } else {
                          LoginError(response.status,response.message);
                        }
                      })
                      .catch((error) => {
                        console.error('Error:', error);
                      });
                  
            },
            logout: () => {
                setStore({
                    token: null
                })
            },
        }
    }
}

export default getState;