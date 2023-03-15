<template>
    <div class="collapsible-component">
        <div class="toggle-filters-wrapper">
            <div data-bs-toggle="collapse" :data-bs-target="'#' + targetElemId" :id="buttonElemId" class="toggle-filters-button collapsed d-flex align-items-center" @click="toggleFiltersButtonClicked">
                <div class="me-auto">{{ componentTitle }}</div>
                <div class="">
                    <i :id="warningIconId" :title="warningIconTitle" class="fa-solid fa-exclamation-circle fa-2x filter-warning-icon"></i>
                </div>
                <div class="ml-2">
                    <i :id="chevronElemId" class="rotate-icon fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="collapse" :id="targetElemId">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuid } from 'uuid';

export default {
    name:"CollapsibleComponent",
    props: {
        componentTitle: {
            type: String,
            required: false,
            default: '',
        }
    },
    watch: {
        filtersExpanded: function(){
            let chevronIcon = $('#' + this.chevronElemId)
            if (this.filtersExpanded){
                chevronIcon.addClass('chev-rotated')
            } else {
                chevronIcon.removeClass('chev-rotated')
            }
        }
    },
    data:function () {
        return {
            targetElemId: 'target-elem-' + uuid(),
            buttonElemId: 'button-elem-' + uuid(),
            chevronElemId: 'chevron-elem-' + uuid(),
            warningIconId: 'warning-elem-' + uuid(),
            warningIconTitle: '',
            displayIcon: false,
            filtersExpanded: null,
        }
    },
    methods: {
        toggleFiltersButtonClicked: function(e){
            // Bootstrap add a 'collapsed' class name to the element
            let filtersExpandedWhenClicked = $('#' + this.buttonElemId).hasClass('collapsed')
            this.filtersExpanded = !filtersExpandedWhenClicked
        },
        showWarningIcon: function(show){
            let warningIcon = $('#' + this.warningIconId)
            if (show){
                warningIcon.css('opacity', 1)
                this.warningIconTitle = 'filter(s) applied'
            } else {
                warningIcon.css('opacity', 0)
                this.warningIconTitle = ''
            }
        },
    },
    mounted: function() {
        this.$nextTick(function(){
            this.$emit('created')
        })
    },
}
</script>

<style>
.collapsible-component .toggle-filters-wrapper {
    background: #efefee;
    padding: 0.5em;
    display: grid;
}
.collapsible-component .toggle-filters-button {
    cursor: pointer;
}
.collapsible-component .filter-warning-icon {
    color: #ffc107;
    transition: 0.5s;
}
.collapsible-component .rotate-icon {
    transition: 0.5s;
}
.collapsible-component .chev-rotated {
    transform: rotate(90deg);
}
</style>
