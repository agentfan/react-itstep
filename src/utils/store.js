import React from 'react'

export const StoreContext = React.createContext(null);

export default ({ children }) => {
    const eventsArray = [
        {
            id: 0,
            name: "Films",
            events: [
                {
                    id: 0,
                    name: "Чілдрен Кінофест 2020 – онлайн",
                    date: "сьогодні - до 7 червня, 09:00",
                },
                {
                    id: 1,
                    name: "Автомобільний кінотеатр перегляд фільму Субурбікон",
                    date: "завтра, 21:00",
                },
            ],
        },
        {
            id: 1,
            name: "Theatre",
            events: [
                {
                    id: 0,
                    name: "Роздягайся-Поговоримо",
                    date: "9 червня, 19:00",
                },
                {
                    id: 1,
                    name: "Чорний квадрат. Попередні ласки",
                    date: "27 серпня, 19:00",
                },
            ],
        },
        {
            id: 2,
            name: "Concerts",
            events: [
                {
                    id: 0,
                    name: "Оля Полякова",
                    date: "3 червня, 19:00",
                },
                {
                    id: 1,
                    name: "Антитіла",
                    date: "14 червня, 20:00",
                },
            ],
        },
    ];

    const [events, setEvents] = React.useState(eventsArray);

    const store = {
        events: [events, setEvents]
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}