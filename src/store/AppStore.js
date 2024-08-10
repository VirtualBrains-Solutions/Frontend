import {defineStore} from "pinia"

export const appStoreGeneral = defineStore("main", {
    state:() => ({
        userInfo: null,
        logeado: false,
        isMedic: false,
        countGoals: {
            "Completado": 0,
            "Falta": 0
        }
    }),
    getters: {
        getUserInfo: (state) => state.userInfo,
        getLogeado: (state) => state.logeado,
        getUserId: (state) => state.userInfo.id,
        getTypeUser: (state) => state.userInfo,
        getIsMedic: (state) => state.isMedic,
        getUserName: (state) => state.userInfo.nombre,
        getUserLastName: (state) => state.userInfo.apellido,
        getURLPhoto: (state) => state.userInfo.img_url_profile,
        getPassword: (state) => state.userInfo.password,
        getTotalCountGoals: (state) => state.countGoals
    },
    actions: {
        deleteUserInfo(){
            this.userInfo = null
            this.logeado = false
            this.isMedic = false
        },
        setUserInfo(newUserInfo){
            this.userInfo = newUserInfo
            this.logeado = true
        },
        saveState(){
            const state = JSON.stringify(this.userInfo)
            localStorage.setItem("userInfo", state)
        },
        loadState(){
            const state = localStorage.getItem("userInfo")
            if(state){
                this.userInfo = JSON.parse(state)
                this.logeado = true
            }
        },
        setMedicTrue(){
            this.isMedic = true
        },
        setPassword(password){
            this.userInfo.password = password
        },
        setZeroCountGoals(){
            this.countGoals.Completado = 0
            this.countGoals.Falta = 0
        },
        incrementCountGoalsComplete(){
            this.countGoals.Completado = this.countGoals.Completado + 1
        },
        incrementCountGoalsIncomplete(){
            this.countGoals.Falta = this.countGoals.Falta + 1
        }
    }
})
