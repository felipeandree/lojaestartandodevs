import { rest } from "msw";

export const handlers = [
  rest.post("/login", null),
  //handles a POST /login request

  rest.get("/carrinho", null),
  // Handles a GET /carrinhos request
  
  rest.get("/user", null),
  // Handles a GET /user request

  rest.get("/produtos", (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
