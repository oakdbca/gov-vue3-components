<template>
    <button :disabled="isLoading">
        <template v-if="isLoading">
            <div class="spinner-border spinner-border-sm text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </template>
        <slot v-else></slot>
    </button>
</template>

<script setup>
defineOptions({ name: 'BootstrapButtonSpinner' })

defineProps({
    isLoading: { type: Boolean, default: false },
})
</script>
