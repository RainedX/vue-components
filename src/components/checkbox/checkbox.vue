<template>
    <label>
        <span>
            <input type="checkbox" :disabled="disabled" :checked="currentValue" @change="change">
        </span>
        <slot></slot>
    </label>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        }
    },
    data() {
        return {
            currentValue: this.value
        };
    },
    methods: {
        change(e) {
            const checked = e.target.checked;
            this.currentValue = checked;
        }
    }
};
</script>

