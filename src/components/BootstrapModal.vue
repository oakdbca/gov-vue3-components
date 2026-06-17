<template>
    <Transition name="modal">
        <div v-if="modelValue" class="modal-backdrop-overlay" @click.self="clickMask">
            <div class="modal d-block" role="dialog" aria-modal="true">
                <div class="modal-dialog" :class="modalClass" role="document">
                    <div class="modal-content">
                        <slot name="header">
                            <div class="modal-header">
                                <h4 class="modal-title">
                                    <slot name="title">{{ title }}</slot>
                                </h4>
                                <button
                                    type="button"
                                    class="btn-close btn-close-white"
                                    aria-label="Close"
                                    @click="cancel"
                                ></button>
                            </div>
                        </slot>
                        <div class="modal-body">
                            <slot></slot>
                        </div>
                        <div class="modal-footer">
                            <slot name="footer">
                                <button type="button" :class="cancelClass" @click="cancel">{{ cancelText }}</button>
                                <button type="button" :class="okClass" @click="ok">{{ okText }}</button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { computed, watch, onBeforeUnmount } from 'vue'

defineOptions({ name: 'BootstrapModal' })

const props = defineProps({
    modelValue:  { type: Boolean, default: false },
    title:       { type: String,  default: 'Modal' },
    small:       { type: Boolean, default: false },
    large:       { type: Boolean, default: false },
    full:        { type: Boolean, default: false },
    force:       { type: Boolean, default: false },
    okText:      { type: String,  default: 'OK' },
    cancelText:  { type: String,  default: 'Cancel' },
    okClass:     { type: String,  default: 'btn btn-primary' },
    cancelClass: { type: String,  default: 'btn btn-secondary' },
    closeWhenOK: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'ok', 'cancel'])

const modalClass = computed(() => ({
    'modal-lg':   props.large,
    'modal-sm':   props.small,
    'modal-full': props.full,
}))

watch(() => props.modelValue, (val) => {
    document.body.classList.toggle('modal-open', val)
}, { immediate: true })

onBeforeUnmount(() => {
    document.body.classList.remove('modal-open')
})

function ok() {
    emit('ok')
    if (props.closeWhenOK) emit('update:modelValue', false)
}

function cancel() {
    emit('cancel')
    emit('update:modelValue', false)
}

function clickMask() {
    if (!props.force) cancel()
}
</script>

<style scoped>
.modal-backdrop-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1040;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
.modal {
    display: block;
    position: relative;
    z-index: 1050;
}
.modal-header {
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    background-color: #003e52;
    color: #eee;
    border: 1px solid white;
}
.modal-body { background-color: #efefef; }
.modal-footer {
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
}
.modal-enter-active,
.modal-leave-active { transition: opacity .3s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-active .modal-dialog,
.modal-leave-active .modal-dialog { transition: transform .3s ease; }
.modal-enter-from .modal-dialog,
.modal-leave-to .modal-dialog { transform: translateY(-30%); }
</style>
