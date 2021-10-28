import { GET_AUTHEN, LOGIN_SUCCESS } from "../mutation-types";
import { currentUser } from "../../service/auth_header";
import axios from "axios"

const user = currentUser();
const API_URL = 'http://localhost:9000/api/auth/';

const state = () => {
    return {
        currentUser: user,
        loading: false,
        authError: null
    }
};
const getters = {
    IS_LOADING: state => {
        return state.loading;
    },
    getCurrentUser: state => {
        return state.currentUser;
    },
    AUTH_ERROR: state => {
        return state.authError;
    },
};
const mutations = {
    LOGIN: state => {
        state.loading = true;
        state.authError = null;
    },

    [LOGIN_SUCCESS]: (state, payload) => {
        state.authError = null;
        state.loading = false;
        state.currentUser = Object.assign({}, payload.user, {token: payload.token});
        console.log('mutation', state.currentUser)
        console.log('payload', payload)

        localStorage.setItem('user', JSON.stringify(state.currentUser));
    }
};
const actions = {

    async login( context, user) {
        const res= await axios.post(API_URL+ "signin", {
            username: user.username,
            password: user.password,
        })
        context.commit(LOGIN_SUCCESS, res.data)
    },

    logout() {
        localStorage.removeItem('user')
    },

    async register(context, user) {
        const res = await axios.post(API_URL + 'signup', {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            password: user.password,
        })
        return res
    },
    setUser (context, payload) {
        context.commit(setCurrentUser, payload)
    } 
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}