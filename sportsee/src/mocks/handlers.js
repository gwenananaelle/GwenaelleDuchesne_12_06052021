// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
// Handles a Get request http://localhost:3000/user/${userId}
rest.get('http://localhost:3000/user/12', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
            "data": {
                "id": 12,
                "userInfos": {
                    "firstName": "Karlito",
                    "lastName": "Dovineau",
                    "age": 31
                },
                "todayScore": 0.12,
                "keyData": {
                    "calorieCount": 1930,
                    "proteinCount": 155,
                    "carbohydrateCount": 290,
                    "lipidCount": 50
                }
            }
        }),
    )
  })
]