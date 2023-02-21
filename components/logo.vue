<template>
    <div class="logo__container">
        <nuxt-link class="logo__link" :to="'/'">
            sevenbank
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.logo {
    &__link {
        cursor: pointer;
        color: white;

        &:hover {
            opacity: 0.6;
        }
    }

    &__container {
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-size: 3rem;
    }
}
</style>