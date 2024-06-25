import { buildBaseUrl } from "@/utils/tjsp/buildBaseUrl";
import { Request, Response } from "express";
import global from "@/types"
/* 
    searchResource methods: 
    nomeParte | NMPARTE
    documentoParte | DOCPARTE
    numeroProcesso | NUMPROC
    nomeAdvogado | NMADVOGADO
    numeroOab | NUMOAB
    numeroPrecatoria | PRECATORIA
    documentoDelegacia | DOCDELEG
    numeroCDA | NUMCDA

    */
export const tjspController = {
  searchByMethod: async (req: Request<any>, res: Response<any>) => {
    const searchMethod = req.query.method as string;
    const searchValue = req.query.value as string;
    const forumId = req.query.forum as string;

    if (!searchMethod || !searchValue || !forumId) {
      return res.status(400).send({ message: "Invalid query parameters." });
    }

    const URL_DATA: TJSP_QUERY = {
      method: searchMethod,
      value: searchValue,
      forumId: parseInt(forumId),
    };

    const QUERY = buildBaseUrl(URL_DATA);
    res.send(QUERY)
    
  },
};
