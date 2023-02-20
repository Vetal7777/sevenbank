<template>
    <div class="logo__container">
        <a class="logo__link" href="#">
            sevenbank
        </a>
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