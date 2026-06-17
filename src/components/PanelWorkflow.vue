<template>
    <div class="card mb-3">
        <div class="card-header">Workflow</div>
        <PanelStatus :status="status" :status-display="statusDisplay" />
        <div v-if="assignableUsers" class="card-body">
            <PanelAssignable
                :content-type="contentType"
                :pk="pk"
                :assignable-users="assignableUsers"
                :assign-to-me-api-url="assignToMeApiUrl"
                :assign-to-api-url="assignToApiUrl"
                :assigned-to="assignedTo"
                :request-user-id="requestUserId"
                @assign-to-me="emit('assignToMe')"
                @assign-to="assignTo"
            />
        </div>
        <div v-if="shouldShowActions" class="card-body">
            <label for="actions" class="form-label">Actions</label>
            <slot name="actions"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import PanelStatus from './PanelStatus.vue'
import PanelAssignable from './PanelAssignable.vue'

defineOptions({ name: 'PanelWorkflow' })

const props = defineProps({
    status:           { type: String,  required: true },
    statusDisplay:    { type: String,  default: null },
    contentType:      { type: Number,  required: true },
    pk:               { type: Number,  required: true },
    assignableUsers:  { type: Array,   default: null },
    assignToMeApiUrl: { type: String,  default: null },
    assignToApiUrl:   { type: String,  default: null },
    assignedTo:       { type: Number,  required: true },
    requestUserId:    { type: Number,  required: true },
    showActions:      { type: Boolean, default: false },
})

const emit = defineEmits(['assignToMe', 'assignTo'])

const isAssignedToMe    = computed(() => props.assignedTo === props.requestUserId)
const shouldShowActions = computed(() => props.showActions || isAssignedToMe.value)

function assignTo(value) {
    emit('assignTo', value)
}
</script>
