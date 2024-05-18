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
}

export default RegisterApplicationService;