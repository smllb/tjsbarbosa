import { tjspService  } from "@/services/tjsp/service";

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
  searchByMethod: tjspService.searchByMethod 

};
