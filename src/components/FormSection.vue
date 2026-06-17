<template>
    <div class="card form-section" :id="customId">
        <div class="card-header fw-bold h4 section-header">
            <div
                class="row show-hide-switch"
                :id="'show-hide-switch-' + sectionBodyId"
                aria-expanded="true"
                :aria-controls="sectionBodyId"
            >
                <div class="col-11" :style="'color:' + customColor">{{ label }}</div>
                <div class="col-1 text-end">
                    <i
                        :id="chevronElemId"
                        class="bi fw-bold chevron-toggle"
                        :data-bs-target="'#' + sectionBodyId"
                    ></i>
                </div>
            </div>
        </div>
        <div :class="detailsClass" :id="sectionBodyId" :style="'color:' + customColor">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

defineOptions({ name: 'FormSection' })

const props = defineProps({
    label: {},
    index:        { type: String,  required: true },
    customColor:  { type: String,  default: '' },
    formCollapse: { type: Boolean, default: false },
})

const _id = Math.random().toString(36).slice(2, 9)
const customId      = _id
const chevronElemId = `chevron-elem-${_id}`

const detailsClass  = computed(() => props.formCollapse ? 'card-body collapse' : 'card-body')
const sectionBodyId = computed(() => `section-body-${props.index}`)

onMounted(() => {
    // chevron_toggle is provided by webtemplate_dbca (base_bs5_common_after.js)
    window.chevron_toggle?.init()
})
</script>

<style>
.form-section {
    margin-bottom: 20px;
    padding: 0;
}
.form-section .section-header {
    padding: 30px;
}
.form-section .show-hide-switch {
    cursor: pointer;
}
</style>
