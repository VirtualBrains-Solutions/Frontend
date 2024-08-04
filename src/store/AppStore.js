import {defineStore} from "pinia"

export const appStoreGeneral = defineStore("main", {
    state:() => ({
        userInfo: null,
        logeado: false,
        isMedic: false
    }),
    getters: {
        getUserInfo: (state) => state.userInfo,
        getLogeado: (state) => state.logeado,
        getUserId: (state) => state.userInfo.id,
        getTypeUser: (state) => state.tipo_usuario,
        getIsMedic: (state) => state.isMedic,
        getUserName: (state) => state.userInfo.nombre,
        getUserLastName: (state) => state.userInfo.apellido
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
        }
    }
})
