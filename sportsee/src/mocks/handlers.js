// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
    // Handles a Get request http://localhost:3000/user/${userId}
    rest.get('http://localhost:3000/user/:id', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                data: {
                    id: 12,
                    userInfos: {
                        firstName: 'Karlito',
                        lastName: 'Dovineau',
                        age: 31,
                    },
                    todayScore: 0.12,
                    keyData: {
                        calorieCount: 1930,
                        proteinCount: 155,
                        carbohydrateCount: 290,
                        lipidCount: 50,
                    },
                },
            })
        )
    }),
    rest.get('http://localhost:3000/user/:id/performance', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                data: {
                    userId: 12,
                    kind: {
                        1: 'cardio',
                        2: 'energy',
                        3: 'endurance',
                        4: 'strength',
                        5: 'speed',
                        6: 'intensity',
                    },
                    data: [
                        { value: 80, kind: 1 },
                        { value: 120, kind: 2 },
                        { value: 140, kind: 3 },
                        { value: 50, kind: 4 },
                        { value: 200, kind: 5 },
                        { value: 90, kind: 6 },
                    ],
                },
            })
        )
    }),
]
