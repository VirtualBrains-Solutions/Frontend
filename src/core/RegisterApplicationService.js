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
    async deleteUserById(id){
        try{
            await http.delete(`/users/delete/${id}`)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async deleteAllCommentsByUserId(id){
        try{
            await http.delete(`/comments/delete/user/${id}`)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async deleteAllFavoritesScenariosByUserId(id){
        try{
            await http.delete(`/scenarios/favorite/delete/all/${id}`)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async deleteAllSuggestByUserId(id){
        try{
            await http.delete(`/suggests/delete/all/${id}`)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async deleteAllSessionsByUserId(id){
        try{
            await http.delete(`/sessions/delete/all/${id}`)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async deleteAllPlansByUserId(id){
        try{
            await http.delete(`/plans/patient/delete/all/${id}`)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async changeUserStatus(id){
        try{
            await http.put(`/users/status/${id}`)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async deleteCommentById(id){
        try{
            await http.delete(`/comments/delete/comment/${id}`)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async createUser(data){
        try{
            await http.post(`/users/`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async loginUser(data){
        try{
            return await http.post(`/users/login`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async validateEmailPatient(data){
        try {
            const response =  await http.post('/users/search', data)
            return response
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async createPlan(data){
        try{
            await http.post("/plans/", data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async getPlansByMedicalId(id){
        try{
            const response =  await http.get(`/plans/medic/${id}`)
            const {data} = response
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async getPlanById(id){
        try{
            const response =  await http.get(`/plans/${id}`)
            const {data} = response
            console.log(data)
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
}

export default RegisterApplicationService;