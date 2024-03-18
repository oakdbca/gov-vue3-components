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
                @assign-to-me="$emit('assignToMe')"
                @assign-to="assignTo"
            />
        </div>
        <div v-if="showActions" class="card-body">
            <label for="assigned-to" class="form-label">Actions</label>
            <slot name="actions"
                ><!-- Add any actions to the parent component --></slot
            >
        </div>
        <slot name="default"
            ><!-- Add any custom workflow elements as card bodies to the parent component --></slot
        >
    </div>
</template>

<script>
import PanelStatus from './PanelStatus.vue';
import PanelAssignable from './PanelAssignable.vue';

export default {
    name: 'PanelWorkflow',
    components: {
        PanelStatus,
        PanelAssignable,
    },
    props: {
        status: {
            type: String,
            required: true,
        },
        statusDisplay: {
            type: String,
            required: false,
            default: null,
        },
        contentType: {
            type: Number,
            required: true,
        },
        pk: {
            type: Number,
            required: true,
        },
        assignableUsers: {
            type: Array,
            required: false,
            default: null,
        },
        assignToMeApiUrl: {
            type: String,
            required: false,
            default: null,
        },
        assignToApiUrl: {
            type: String,
            required: false,
            default: null,
        },
        assignedTo: {
            type: Number,
            required: true,
        },
        requestUserId: {
            type: Number,
            required: true,
        },
        showActions: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ['assignToMe', 'assignTo'],
    created() {},
    computed: {
        isAssignedToMe() {
            return this.assignedTo === this.requestUserId;
        },
        showActions() {
            // If showActions is set to true, always show the actions
            // regardless of assignableUsers. This allows the parent to override
            // the default behavior when needed.
            if(this.showActions === true){
                return true;
            }
            return this.isAssignedToMe;
        },
    },
    methods: {
        assignTo(value) {
            this.$emit('assignTo', value);
        },
    },
};
</script>
