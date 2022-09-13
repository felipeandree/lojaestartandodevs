import { setupWorker, rest } from "msw";
import { products } from "./data";

export const worker = setupWorker(
    rest.get('/produtos', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({data: products})
        )
    })
)