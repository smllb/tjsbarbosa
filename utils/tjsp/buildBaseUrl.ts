import TJSP from "@/config/tjsp/tjsp";
export const buildBaseUrl = (QUERY: TJSP_QUERY) => {
  return `${TJSP.BASE_URL}${TJSP.CPOPG}/${TJSP.SEARCH_DO}?${TJSP.CB_PLACEHOLDER}=${QUERY.method}&${TJSP.DATA_QUERY_PLACEHOLDER}=${QUERY.value}&${TJSP.FORUM_ID_PLACEHOLDER}=${QUERY.forumId}`;
};
