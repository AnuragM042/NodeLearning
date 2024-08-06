import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is joke 1",
    },
    {
      id: 2,
      title: "A joke2",
      content: "This is joke 2",
    },
    {
      id: 3,
      title: "A joke3",
      content: "This is joke 3",
    },
    {
      id: 4,
      title: "A joke4",
      content: "This is joke 4",
    },
    {
      id: 5,
      title: "A joke5",
      content: "This is joke 5",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 3020;

app.listen(port, () => {
  console.log(`Serve at ${port}`);
});
