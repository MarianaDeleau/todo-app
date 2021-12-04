import { api } from "../utils/axios"



const getSelectedTasks = async (dataid:string) => {
    const response = await api.get(`/tasks/${dataid}.json`);
    return response.data;
  };
  
  export { getSelectedTasks };
  