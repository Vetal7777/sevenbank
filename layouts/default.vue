<template>
    <div class="init__backround">
        <div class="init__container">
            <Header />
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

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