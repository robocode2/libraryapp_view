import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.post("/login", (req, res, ctx) => {
    const { username } = req.body;

    return rest(
      ctx.json({
        username,
        firstname: "John",
      })
    );
  })
);

worker.start();
