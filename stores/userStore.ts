import { defineStore } from 'pinia'
import { UserStateI } from '~~/models/userState'
import UserState from '~~/state/userState'

export const UserStore = defineStore('User', {
    state: () => UserState,
    actions: {
        setUserState(user: UserStateI) {
            this.$state = { ...user };
        }
    }
})