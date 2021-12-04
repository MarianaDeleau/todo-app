import { mapToArray } from "../../../api/users";
import { useAuth } from "../../../hooks";
import { api } from "../../../utils";

type Payload = {
    category: string,
    user: string,
};


const createCategory = async (data: Payload) => {
    await api.post("/categories.json", data);
};

const getCategories = async () => {
    const response = await api.get("/categories.json");
    return mapToArray(response.data);
};
  
const editCategory = async (data: Payload) => {
    const param = new URLSearchParams(window.location.search);
    const id = await param.get('id')
    await api.patch(`/categories/${id}.json`, data);
};
  
const deleteCategory = async () => {
    const param = new URLSearchParams(window.location.search);
    const id = await param.get('id')
    await api.delete(`/categories/${id}.json`);
  };


export { createCategory, getCategories, editCategory, deleteCategory };

  