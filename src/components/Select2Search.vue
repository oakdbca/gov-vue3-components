<template>
    <FormSection :label="'Search ' + label" :index="index">
        <div class="row form-group">
            <div class="col-md-3">
                <label :for="index" class="ms-3">
                    <strong>{{ 'Search ' + label }}:</strong>
                </label>
            </div>
            <div class="col-md-5">
                <select :id="index" :name="index" class="form-control" />
            </div>
        </div>
    </FormSection>
</template>

<script setup>
import { onMounted } from 'vue'
import FormSection from './FormSection.vue'

defineOptions({ name: 'Select2Search' })

const props = defineProps({
    label:             { type: String, required: true },
    lookupApiEndpoint: { type: String, required: true },
    redirectPath:      { type: String, required: true },
    theme:             { type: String, default: 'bootstrap-5' },
})

// Requires jQuery and Select2 available as globals (peer dependencies)
const index = `search-${props.label.toLowerCase().replace(/ /g, '-')}`

onMounted(() => {
    $(`#${index}`)
        .select2({
            minimumInputLength: 2,
            theme: props.theme,
            allowClear: true,
            placeholder: 'Select ' + props.label,
            ajax: {
                url: props.lookupApiEndpoint,
                dataType: 'json',
                data: (params) => ({ term: params.term, type: 'public' }),
            },
        })
        .on('select2:open', () => {
            $(`[aria-controls='select2-${index}-results']`)[0]?.focus()
        })
        .on('select2:select', (e) => {
            window.location = props.redirectPath + $(e.currentTarget).val()
        })
})
</script>
