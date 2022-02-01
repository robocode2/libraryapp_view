import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/books", (req, res, ctx) => {
    return res(
      ctx.json({
        books: [
          {
            title: "Narnia 1",
            isbn: "9780060765453",
            description: "kids go to winterland",
            createdAt: "2022-01-15T18:47:00.374Z",
            updatedAt: "2022-01-15T18:47:00.374Z",
          },
          {
            title: "Harry Potter à lecole des sorciers",
            isbn: "9782070643028",
            description: "harry potter 3",
            createdAt: "2022-01-15T18:47:00.374Z",
            updatedAt: "2022-01-15T18:47:00.374Z",
          },
          {
            title: "Harry Potter and the Cup of Fire",
            isbn: "9780439139595",
            description: "harry potter 4",
            createdAt: "2022-01-15T18:47:00.374Z",
            updatedAt: "2022-01-15T18:47:00.374Z",
          },
          {
            title: "Harry Potter and the Order of the Phoenix",
            isbn: "9781408855690",
            description: "harry potter 5",
            createdAt: "2022-01-15T18:47:00.374Z",
            updatedAt: "2022-01-15T18:47:00.374Z",
          },
          {
            title: "Harry Potter and the Half-Blood Prince",
            isbn: "9780545582995",
            description: "harry potter 6",
            createdAt: "2022-01-15T18:47:00.374Z",
            updatedAt: "2022-01-15T18:47:00.374Z",
          },
        ],
      })
    );
  }),

  // Handles a POST /login request
  rest.post("http://localhost:8080/books/create", (req, res, ctx) => {
    //console.log(req);
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        server: "you hit this point",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),

  rest.get("http://localhost:8080/lists", (req, res, ctx) => {
    return res(
      ctx.json({
        lists: [
          {
            userid: "FaAMohHFTwftFrApJnjcEt640k92",
            name: "example list 1",
            description: "my favourites books",
            createdAt: "2022-01-15T18:47:00.374Z",
            updatedAt: "2022-01-15T18:47:00.374Z",
          },
          {
            userid: "FaAMohHFTwftFrApJnjcEt640k92",
            name: "example list 2",
            description: "my favourites books",
            createdAt: "2022-01-15T18:47:00.374Z",
            updatedAt: "2022-01-15T18:47:00.374Z",
          },
          {
            userid: "FaAMohHFTwftFrApJnjcEt640k92",
            name: "example list 3",
            description: "my favourites books",
            createdAt: "2022-01-15T18:47:00.374Z",
            updatedAt: "2022-01-15T18:47:00.374Z",
          },
        ],
      })
    );
  }),

  // Handles a POST /login request
  rest.post("/lists/create", (req, res, ctx) => {
    //console.log(req);
    return res(
      ctx.json({
        userid: "FaAMohHFTwftFrApJnjcEt640k92",
        name: "example list 555",
        description: "my favourites books",
        createdAt: "2022-01-15T18:47:00.374Z",
        updatedAt: "2022-01-15T18:47:00.374Z",
      })
    );
  }),

  rest.post("/login", (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),

  rest.post("/entries/create", null),
  // Handles a GET /user request
  rest.get("/entries", null),
];
