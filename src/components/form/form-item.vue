<template>
    <div>
        <label v-if="label">{{label}}</label>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Emitter from "../../mixins/emitter.js";

export default {
    name: "iFormItem",
    mixins: [Emitter],
    props: {
        label: {
            type: String,
            default: ""
        },
        prop: String
    },
    data() {
        return {};
    },
    mounted() {
        // 如果没有传入 prop，则无需校验，也就无需缓存
        if (this.prop) {
            this.dispatch("iForm", "on-form-item-add", this);
            this.setRules();
        }
    },
    beforeDestroy() {
        this.dispatch("iForm", "on-form-item-remove", this);
    },
    methods: {
        /**
         * @param trigger 校验类型
         * @param callback 回掉函数
         */
        validate(trigger, callback = () => {}) {
            
        },
        onFieldBlur() {
            this.validate("blur");
        },
        onFieldChange() {
            this.validate("change");
        },
        setRules() {
            this.$on("on-form-blur", this.onFieldBlur);
            this.$on("on-form-change", this.onFieldChange);
        }
    }
};
</script>
<style>
.i-form-item-label-required:before {
    content: "*";
    color: red;
}
.i-form-item-message {
    color: red;
}
</style>
