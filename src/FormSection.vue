<template>
    <div class="card section-wrapper" :id="customId">
        <div class="card-header fw-bold h4 section-header">
            <div 
                class="row show-hide-switch" 
                :id="'show-hide-switch-' + sectionBodyId" 
                aria-expanded="true" 
                :aria-controls="sectionBodyId"
            >
                <div class='col-11' :style="'color:' + customColor">
                    {{ label }}
                </div>
                <div class='col-1 text-end'>
                    <i 
                        :id="chevronElemId" 
                        class="bi fw-bold chevron-toggle"
                        :data-bs-target="'#' + sectionBodyId" 
                    >
                    </i>
                </div>
            </div>
        </div>
        <div :class="detailsClass" :id='sectionBodyId' :style="'color:' + customColor">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { v4 as uuid } from 'uuid';

export default {
    name:"FormSection",
    props: {
        label: {},
        index: {
            type: String,
            required: true,
        },
        customColor: {
            type: String,
            required: false,
            default: '',
        },
        formCollapse: {
            type: Boolean,
            default: false,
        },
    },
    data:function () {
        return {
            customId: uuid(),
            chevronElemId: 'chevron-elem-' + uuid(),
        }
    },
    computed:{
        detailsClass: function() {
            let classText = 'card-body';
            if (this.formCollapse) {
                classText = 'card-body collapse';
            }
            return classText;
        },
        sectionBodyId: function () {
            return "section-body-"+this.index;
        }
    },
    mounted: function() {
        // see: static/js/base_bs5_common_after.js (included in webtemplate_dbca)
        // Todo: Move the chevron toggle code into this library so it can stand alone
        chevron_toggle.init();
    },
}
</script>

<style scoped>
.section-header {
    padding: 30px;
}
.section-wrapper {
    margin-bottom: 20px;
    padding: 0;
}
.show-hide-switch{
    cursor: pointer;
}
</style>
