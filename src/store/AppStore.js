import {defineStore} from "pinia"

export const appStoreGeneral = defineStore("main", {
    state:() => ({
        userInfo: null,
        logeado: false
    }),
    getters: {
        getUserInfo: (state) => state.userInfo,
        getLogeado: (state) => state.logeado,
        getUserId: (state) => state.userInfo.id
    },
    actions: {
        deleteUserInfo(){
            this.userInfo = {}
            this.logeado = false
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
        }
    }
})
