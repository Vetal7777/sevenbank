import { defineStore } from 'pinia'
import AppState from '~~/state/appState';

export const AppStore = defineStore('App', {
    state: () => AppState,
    actions: {
        toggleIsLoadingStatus() {
            this.$state.isLoading = !this.$state.isLoading;
        },
        showError(error: string) {
            this.$state.error = error;
        },
        hideError() {
            this.$state.error = null;
        }
    }
})