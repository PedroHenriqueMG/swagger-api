import Express from "express";
import swaggerui from "swagger-ui-express";
import swaggerdocs from "./swagger.json";
import { document } from "./swagger/swagger";

const app = Express();
app.use(Express.json());
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("API rodando");
});

app.use("/docs", swaggerui.serveFiles(document), swaggerui.setup());

app.listen(PORT, () => {
  console.log(`API rodando na porta: ${PORT}`);
});

export default app;
