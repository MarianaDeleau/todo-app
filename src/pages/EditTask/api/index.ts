import { api } from "../../../utils"

type Payload = {
    title: string;
    category: string; 
    description: string;
    progress: string;
    user: string;
    creationDate: string;
    startDate: string;
    completionDate: string;
    };

  
const edittask = async (data: Payload) => {
    const param = new URLSearchParams(window.location.search);
    const id = await param.get('id')
    await api.patch(`/tasks/${id}.json`, data);

}
  export { edittask };