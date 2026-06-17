<template>
    <div class="collapsible-component">
        <div class="toggle-filters-wrapper">
            <div
                ref="buttonRef"
                :id="buttonElemId"
                :data-bs-target="'#' + targetElemId"
                class="toggle-filters-button collapsed d-flex align-items-center"
                data-bs-toggle="collapse"
                @click="toggleFiltersButtonClicked"
            >
                <div class="me-auto">{{ componentTitle }}</div>
                <div>
                    <i
                        :id="warningIconId"
                        :title="warningIconTitle"
                        class="fa-solid fa-exclamation-circle fa-2x filter-warning-icon"
                        :style="{ opacity: displayIcon ? 1 : 0 }"
                    ></i>
                </div>
                <div class="ml-2">
                    <i
                        class="rotate-icon fa-solid fa-chevron-right"
                        :class="{ 'chev-rotated': filtersExpanded }"
                    ></i>
                </div>
            </div>
            <div class="collapse" :id="targetElemId">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

defineOptions({ name: 'CollapsibleComponent' })

defineProps({
    componentTitle: { type: String, default: '' },
})

const emit = defineEmits(['created'])

const _id = Math.random().toString(36).slice(2, 9)
const targetElemId  = `target-elem-${_id}`
const buttonElemId  = `button-elem-${_id}`
const warningIconId = `warning-elem-${_id}`

const buttonRef       = ref(null)
const filtersExpanded = ref(false)
const warningIconTitle = ref('')
const displayIcon     = ref(false)

function toggleFiltersButtonClicked() {
    const expandedWhenClicked = buttonRef.value?.classList.contains('collapsed')
    filtersExpanded.value = !expandedWhenClicked
}

function showWarningIcon(show) {
    displayIcon.value = show
    warningIconTitle.value = show ? 'filter(s) applied' : ''
}

defineExpose({ showWarningIcon })

onMounted(() => nextTick(() => emit('created')))
</script>

<style>
.collapsible-component .toggle-filters-wrapper {
    background: #efefee;
    padding: 0.5em;
    display: grid;
}
.collapsible-component .toggle-filters-button { cursor: pointer; }
.collapsible-component .filter-warning-icon {
    color: #ffc107;
    transition: 0.5s;
}
.collapsible-component .rotate-icon { transition: 0.5s; }
.collapsible-component .chev-rotated { transform: rotate(90deg); }
</style>
