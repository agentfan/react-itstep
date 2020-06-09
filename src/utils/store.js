import React, { useState } from 'react';

export const StoreContext = React.createContext(null);

const Store = ({ children }) => {
    const infoOfPainter = {
        name: "",
        surname: "",
        img: "",
        notes: "",
        periods: [
            {
                id: 0,
                title: "",
                notes: "",
                works: [
                    {
                        id: 0,
                        title: "",
                        year: 1897,
                        img: '',
                        notes: "",
                        likes: 0
                    },
                ]
            },
        ]
    };

    const [painter, setPainter] = useState(infoOfPainter);

    const store = {painter, setPainter};

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export default Store;