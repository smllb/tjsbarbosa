import express from "express";
import { tjspController } from "@/controllers/tjsp/tjspSearchController";
const tjspRouter = express.Router();

tjspRouter.get("/", (req, res) => {
  res.send("TJSP Root");
});
tjspRouter.get("/search", (req, res) => {
    tjspController.searchByMethod(req, res)
})

export { tjspRouter };
