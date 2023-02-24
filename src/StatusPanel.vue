<template id="status-panel">
    <div class="">
        <div class="card card-default">
            <div class="card-header">
                Status
            </div>
            <div class="card-body card-collapse">
                <div class="row">
                    <div class="col-sm-12">
                        <strong>Status</strong><br/>
                        <template v-if="badgeClass">
                            <span class="badge" :class="badgeClass">{{ status }}</span>
                        </template>
                        <template v-else>
                            {{ status }}
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StatusPanel",
    props: {
        status: {
            required: true,
            type: String,
        },
        badgeClass: {
            required: false,
            type: String,
            default: false,
        }
    },
}
</script>
