import api from "./api";

export const debugSQL = async (
query,
error
)=>{

const response =
await api.post(

"/ai/sql-debug",

{
query,
error
}

);

return response.data;

};