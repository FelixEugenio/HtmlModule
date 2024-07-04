import { http } from "msw";
import {setupServer} from 'msw/node'

 const handlers = [
    http.get('https://jsonplaceholder.typicode.com/photos', async(req,res,ctx) => {

        return res(ctx.json([
            {
                "userId": 1,
                "id": 1,
                "title": "tittle 1",
                "body": "body 1"
              },
              {
                "userId": 2,
                "id": 2,
                "title": "tittle 2",
                "body": "body 2"
              },
              {
                "userId": 3,
                "id": 3,
                "title": "tittle 3",
                "body": "body 3"
              },
        ]))

    })
]


export const server = setupServer(...handlers);