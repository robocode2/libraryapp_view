// Categories

app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll();

    res.json(categories);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/categories", async (req, res) => {
  const { name, description } = req.body;

  try {
    const category = await Category.create({ name, description });

    return res.json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get("/category/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findOne({
      where: { id },
      //include: 'posts',
    });

    return res.json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.delete("/category/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findOne({ where: { id } });

    await Category.destroy(); //onCascade?

    return res.json({ message: "Category deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.put("/category/:id", async (req, res) => {
  //is id ok? revert to id/uuid?
  //const id = req.params.id;
  const { id, name, description } = req.body;
  try {
    const category = await Category.findOne({ where: { id } });

    category.name = name;
    category.id = id; //geht nicht!?
    category.description = description;

    await Category.save();

    return res.json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// Authors

app.get("/authors", async (req, res) => {
  try {
    const authors = await Author.findAll();

    res.json(authors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/authors", async (req, res) => {
  const { firstname, lastname, bio } = req.body; //do I need id ?

  try {
    const author = await Author.create({ firstname, lastname, bio });

    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get("/author/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const author = await Authors.findOne({
      where: { id },
      //include: 'posts',
    });

    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.delete("/author/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const author = await Author.findOne({ where: { id } });

    await Author.destroy(); //onCascade?

    return res.json({ message: "Author deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.put("/author/:id", async (req, res) => {
  //is id ok? revert to id/uuid?
  const id = req.params.id;
  const { firstname, lastname, bio } = req.body;
  try {
    const author = await Author.findOne({ where: { id } });

    author.firstname = firstname;
    author.lastname = lastname;
    author.bio = bio;

    await Author.save();

    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// Many to Many relationships

app.post("/book/:id/category", async (req, res) => {
  const { bookId, categoryId } = req.body;
  try {
    const categoryTag = await Book_categories.create({ bookId, categoryId });

    return res.json(categoryTag);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get("/book/:id/category", async (req, res) => {
  const id = req.params.id;
  try {
    const categories = await Book_categories.findAll({ where: { bookId: id } });

    return res.json(categories);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//delete?

app.post("/book/:id/authors", async (req, res) => {
  const { bookId, authorId } = req.body;
  try {
    const author = await Book_authors.create({ bookId, authorId });

    return res.json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get("/book/:id/authors", async (req, res) => {
  const bookIdinput = req.body;
  try {
    const authors = await Book_authors.findOne({
      where: { bookId: bookIdinput },
    });

    return res.json(authors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});
