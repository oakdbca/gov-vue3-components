export { default as BootstrapAlert } from './components/BootstrapAlert.vue'
export { default as BootstrapButtonSpinner } from './components/BootstrapButtonSpinner.vue'
export { default as BootstrapModal } from './components/BootstrapModal.vue'
export { default as BootstrapSpinner } from './components/BootstrapSpinner.vue'
export { default as CollapsibleComponent } from './components/CollapsibleComponent.vue'
export { default as ErrorRenderer } from './components/ErrorRenderer.vue'
export { default as FormSection } from './components/FormSection.vue'
export { default as PanelAssignable } from './components/PanelAssignable.vue'
export { default as PanelStatus } from './components/PanelStatus.vue'
export { default as PanelWorkflow } from './components/PanelWorkflow.vue'
export { default as Select2Search } from './components/Select2Search.vue'
export { default as SelectAssignable } from './components/SelectAssignable.vue'
export { default as StatusPanel } from './components/StatusPanel.vue'

import components from './components'

const plugin = {
    install(Vue) {
        for (const component of Object.values(components)) {
            Vue.component(component.name, component)
        }
    },
}

export default plugin