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
    async createUser(data, userPhoto){
        const formData = new FormData();
        formData.append("nombre", data.nombre)
        formData.append("apellido", data.apellido)
        formData.append("fecha_nacimiento", data.fecha_nacimiento)
        formData.append("email", data.email)
        formData.append("password", data.password)
        formData.append("tipo_usuario", data.tipo_usuario)
        formData.append("fecha_creacion", data.fecha_creacion)
        formData.append("userPhoto", userPhoto[0])
        try{
            await http.post(`/users/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
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
    async getPlansByPatientId(id){
        try{
            const response =  await http.get(`/plans/patient/${id}`)
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
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async createGoal(data){
        try{
            await http.post(`/goals/`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }
    async getGoalsByPlanId(id){
        try{
            const response =  await http.get(`/goals/plan/${id}`)
            const {data} = response
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async changeStatusGoalToComplete(id){
        try{
            const response =  await http.put(`/goals/plan/update/complete/${id}`)
            const {data} = response
            return data
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async recoverPassword(data){
        try {
            await http.post('/users/recover-password', data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async updatePassword(data){
        try {
            await http.put('/users/update-password', data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async updateUserInfoMethod(data, userPhoto){
        const formData = new FormData();
        formData.append("nombre", data.nombre)
        formData.append("apellido", data.apellido)
        formData.append("id", data.id)
        formData.append("userUpdatePhoto", userPhoto[0])
        try{
            await http.put(`/users/change-info`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async createCommentChild(data){
        try {
            await http.post("/comments/child", data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async updatePasswordByUserId(data){
        try {
            await http.put('/users/change-password', data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async createQuestionnaireGeneral(data){
        try{
            await http.post(`/questionnaires/general`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async createQuestionnairePreSocial(data){
        try{
            await http.post(`/questionnaires/pre/social`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async createQuestionnairePreInterview(data){
        try{
            await http.post(`/questionnaires/pre/interview`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async createQuestionnairePostSocial(data){
        try{
            await http.post(`/questionnaires/post/social`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async createQuestionnairePostInterview(data){
        try{
            await http.post(`/questionnaires/post/interview`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async sendEmailWithData(data, id){
        try{
            await http.post(`/emails/send/${id}`, data)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    async getPatientsByMedicalId(id){
        try{
            const response = await http.get(`/plans/patients/medic/${id}`)
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