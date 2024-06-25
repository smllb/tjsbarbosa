import TJSP from "@/config/tjsp/tjsp"

export const validateSearchQueryMethod = (searchMethod: string) => {
    return !Object.values(TJSP.CB_VALUE).includes(searchMethod as string)

}