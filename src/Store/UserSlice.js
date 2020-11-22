
import React, { useState, useEffect } from 'react';


let UserStoreSlice = {};


export const UserSlice = () => {
    const [userStore, setUserStore] = useState(UserStoreSlice);

    useEffect(() => {
        setUserStore(UserStoreSlice);
    }, [UserStoreSlice.login]);

    return {
        getLogin: () => { return userStore.login },
        setLogin: (login) => {
            UserStoreSlice = { ...UserStoreSlice, login: login };
            setUserStore(UserStoreSlice);
        }
    }
}


