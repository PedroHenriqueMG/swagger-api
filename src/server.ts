import Express from "express";

const app = Express();
app.use(Express.json());

app.get("/", (req, res) => {
  res.send("API rodando");
});

export default app;
