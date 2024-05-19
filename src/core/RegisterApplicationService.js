import http from "./HttpCommon.js";

class RegisterApplicationService{
    constructor(){

    }
    async getScenarios(){
        try{
            const response =  await http.get("/scenarios")
            const {data} = response
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async getScenario(id){
        try{
            const response =  await http.get(`/scenarios/${id}`)
            const {data} = response
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async getCommentsFromScenario(id){
        try{
            const response =  await http.get(`/comments/scenario/${id}`)
            const {data} = response
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async createComment(data){
        try {
            await http.post("/comments/", data)
        }
        catch(error){
            console.log(error)
            return error
        }

    }
    async changeLikesScenario(id, data){
        try {
            await http.put(`/scenarios/likes/${id}`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async changeDislikesScenario(id, data){
        try {
            await http.put(`/scenarios/dislikes/${id}`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
}

export default RegisterApplicationService;