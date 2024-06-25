import express from "express";

const tjspRouter = express.Router();

tjspRouter.get("/", (req, res) => {
  res.send("TJSP Root");
});
tjspRouter.get("/search", (req, res) => {
    /* 
    nomeParte | NMPARTE
    documentoParte | DOCPARTE
    numeroProcesso | NUMPROC
    nomeAdvogado | NMADVOGADO
    numeroOab | NUMOAB
    numeroPrecatoria | PRECATORIA
    documentoDelegacia | DOCDELEG
    numeroCDA | NUMCDA
    
    */
    const searchResource = req.query.resource;

    res.send(`selected resource: ${searchResource}`);
})


export { tjspRouter };
