<template>
    <template v-if="assignableUsers">
        <select id="assigned-to" v-model="assignedToComputed" class="form-select">
            <option v-for="user in assignableUsers" :key="user.id" :value="user.id">
                {{ user.name }}
            </option>
        </select>
    </template>
    <template v-else>
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </template>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({ name: 'SelectAssignable' })

const props = defineProps({
    assignableUsers: { type: Array,  default: null },
    assignedTo:      { type: Number, required: true },
})

const emit = defineEmits(['assignTo'])

const assignedToComputed = computed({
    get: () => props.assignedTo,
    set: (value) => emit('assignTo', value),
})
</script>
