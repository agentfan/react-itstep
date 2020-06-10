import React, { useState } from 'react';

export const StoreContext = React.createContext(null);

const infoOfPainter = {
    name: "",
    surname: "",
    img: "",
    notes: [
        {
            id: 0,
            text: ""
        }
    ],
    periods: [
        {
            id: 0,
            title: "",
            notes: [
                {
                    id: 0,
                    text: ""
                }
            ],
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

const Store = ({ children }) => {
    const [painter, setPainter] = useState(infoOfPainter);

    const store = {
        painter: painter, setPainter
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export default Store;