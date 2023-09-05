import api from "../api";

interface loginData {
    name: string;
    password: string;
}

interface signInData {
    email: string;
    password: string;
    name: string;
}

interface tokenData{
    token: string;
}



export default {
    async login(data: loginData) {
        try {
            const response = await api.post("/login", data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async createUser(data: signInData){
        try {
            const response = api.post('/user', data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async getDetail(token: tokenData){
        try {
            const response = api.get("/private/getDetails", {headers: {Authorization:token.token}})
            return response;
        } catch (error) {
            
        }
    },
    

    
}
