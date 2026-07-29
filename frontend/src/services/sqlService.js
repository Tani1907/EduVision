import api from "./api";

export const executeQuery = async (query) => {

  const response = await api.post(
    "/sql/execute",
    {
      query,
    }
  );

  return response.data;
};