<template>
    <div
        v-if="centerOfScreen"
        class="position-absolute w-100 h-100 d-flex flex-column align-items-center bg-white justify-content-center"
    >
        <div :class="spinnerClass" class="spinner spinner-border org-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else>
        <div :class="spinnerClass" class="spinner-border org-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({ name: 'BootstrapSpinner' })

const props = defineProps({
    isLoading:      { type: Boolean, default: false },
    centerOfScreen: { type: Boolean, default: true },
    small:          { type: Boolean, default: false },
})

const spinnerClass = computed(() => {
    let cls = props.centerOfScreen ? 'spinner-center-screen' : 'spinner-center-component'
    if (props.small) cls += ' spinner-border-sm'
    return cls
})
</script>

<style>
.spinner-center-screen {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 50%;
    right: 50%;
}
.spinner-center-component {
    margin-top: 50px;
    margin-left: 140px;
}
</style>
