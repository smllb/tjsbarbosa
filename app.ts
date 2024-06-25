import express from "express";
import { tjspRouter } from "./main/routes/tjsp/tjspRouter";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("sup");
});

app.use('/tjsp', tjspRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
