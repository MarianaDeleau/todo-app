import { api } from "../../../utils"

type Payload = {
    title: string;
    description: string;
    progress: string;
    user: string;
    creationDate: string;
    startDate: string;
    completionDate: string;
    };

  
const addtask = async (data: Payload) => {
    await api.post("/tasks.json", data);
    window.location.href = "/dashboard"
  };
  
  export { addtask };