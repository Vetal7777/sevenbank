<template>
    <div class="balance-summary__container">
        <span class="balance-summary__balance">
        </span>
        <span class="balance-summary__currency">
        </span>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.balance-summary {
    &__container {
        display: flex;
        flex-grow: 1;
    }

    &__balance,
    &__currency {
        color: white;
    }
}
</style>