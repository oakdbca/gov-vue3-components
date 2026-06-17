<template>
    <div class="card-body border-bottom">
        <div class="input-group">
            <span class="input-group-text">Status</span>
            <span
                class="input-group-text text-capitalize"
                :class="[badgeTextClass, badgeBackgroundClass]"
            >
                {{ statusText }}
                <i v-if="iconClass" class="bi ps-2" :class="iconClass"></i>
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({ name: 'PanelStatus' })

const props = defineProps({
    status:        { type: String, required: true },
    statusDisplay: { type: String, default: null },
    statusColorMap: {
        type: Object,
        default: () => ({
            draft:           { text: 'text-white', background: 'bg-secondary', icon: 'bi-pencil-square' },
            'with assessor': { text: 'text-white', background: 'bg-primary',   icon: 'bi-clipboard' },
            approved:        { text: 'text-white', background: 'bg-success',   icon: 'bi-check2-square' },
            cancelled:       { text: 'text-white', background: 'bg-danger',    icon: 'bi-x-square' },
            discarded:       { text: 'text-white', background: 'bg-danger',    icon: 'bi-trash3' },
        }),
    },
})

const badgeTextClass       = computed(() => props.statusColorMap[props.status]?.text)
const badgeBackgroundClass = computed(() => props.statusColorMap[props.status]?.background)
const iconClass            = computed(() => props.statusColorMap[props.status]?.icon)
const statusText           = computed(() => props.statusDisplay ?? props.status)
</script>
