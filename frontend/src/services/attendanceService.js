import api from "./api";

export const registerFace = async (formData) => {
  const response = await api.post(
    "/attendance/register-face",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
export const markAttendance = async () => {
  const response = await api.post("/attendance/mark");
  return response.data;
};