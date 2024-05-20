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
    async createSuggest(data){
        try {
            await http.post('/suggests/', data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async getUserInfoById(id){
        try{
            const response =  await http.get(`/users/${id}`)
            const {data} = response
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async createFavoriteScenario(data){
        try{
            await http.post("/scenarios/favorite", data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async validateFavoriteScenario(data){
        try{
            const response =  await http.post("/scenarios/favorite/validate", data)
            return response
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async getFavoriteScenariosByUser(id){
        try{
            const response =  await http.get(`/scenarios/favorite/users/${id}`)
            const {data} = response
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async deleteFavoriteScenario(id){
        try{
            await http.delete(`/scenarios/favorite/delete/${id}`)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
}

export default RegisterApplicationService;