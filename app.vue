<template>
    <div class="init__backround">
        <div class="init__container">
            <NuxtLayout>
            </NuxtLayout>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserStore } from './stores/UserStore';

const config = useRuntimeConfig();
const userStore = UserStore();
const code = ref();
onMounted(async () => {
    const { data } = await useFetch(config.public.baseUrlUsers + '/1');
})
</script>

<style lang="scss" scoped>
.init {
    &__backround {
        display: flex;
        padding: 1rem;
        min-width: 100vw;
        min-height: 100vh;
    }

    &__container {
        display: flex;
        flex-direction: column;
        background-color: #151515;
        border-radius: 1rem;
        width: 100%;
        padding: 1rem;
    }
}
</style>