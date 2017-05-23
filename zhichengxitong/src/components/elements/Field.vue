<template lang="jade">
    div.filed.rel(
        :class="{textarea: textarea}",
        @input="setParentVar($event.target.value)"
    )
        div.text.abs.center {{ tag }}
        div.box.rel
            p.rel(v-if="p") {{ pvalue }}
            input(
                v-if="input",
                :value="value",
                :type="type || 'text'",
                :placeholder="placeholder",
                :maxlength="maxlength"
            )
            textarea(
                v-if="textarea",
                :placeholder="placeholder",
                :maxlength="maxlength"
            )
            .select.rel(
                v-if="select",
                :class="{arrow: arrow}"
            )
                label.abs.ellipsis {{ getOptionKey(selectText, optionJsonConfig, options) }}
                select.abs(@change="$emit('changeCallback')")
                    option &nbsp;
                    option(v-for="o in options", :value="o.id") {{ o.name }}
</template>

<script>
    export default {
        props: [
            "tag",
            "value",
            "type",
            "placeholder",
            "maxlength",
            "input",
            "textarea",
            "p",
            "pvalue",
            "arrow",
            "select",
            "selectText",
            "options",
            "optionJsonConfig",
            
        ],
        methods: {
            setParentVar(value) {
                this.$emit('input', value.toString().trim())
            },
            getOptionKey(value, optionJsonConfig, options) {
                let result = null;
                for (let i = 0, len = options.length; i < len; i++) {
                    if (options[i][optionJsonConfig.valuename] == value) {
                        result = options[i][optionJsonConfig.textname];
                        break;
                    }
                }
                if (!result && !value.toString().trim()) {
                    return this.placeholder || '请选择（必选）';
                }
                return result || value;
            }
        }
    }

</script>

<style lang="sass" scoped>
    .filed {
        background-color: #fff;
        min-height: 54px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        margin-top: 8px;
        &.textarea {
            height: 116px;
            .box {
                height: 116px;
            }
        }
        .text {
            left: 0;
            top: 0;
            width: 88px;
            padding: 16px 0;
        }
        .box {
            margin-left: 88px;
            min-height: 54px;
            input {
                height: 30px;
                line-height: 30px;
                width: 99%;
                border: none;
                position: relative;
                top: 13px;
                left: 0;
                font-size: 13px;
            }
            textarea {
                height: 87px;
                width: 99%;
                position: relative;
                top: 20px;
                border: none;
                resize: none;
                color: #323232;
                font-size: 13px;
            }
            p {
                margin: 0;
                min-height: 30px;
                line-height: 22px;
                font-size: 13px;
                text-align: right;
                padding: 0 16px 22px 0;
                top: 17px;
                left: 0;
            }
        }
        .select {
            height: 54px;
            label {
                display: inline-block;
                height: 54px;
                line-height: 54px;
                top: 0;
                right: 0;
                color: #323232;
                font-size: 13px;
                width: 100%;
                text-align: right;
                padding-right: 38px;
                z-index: 300;
            }
            select {
                top: 0;
                right: 0;
                width: 100%;
                height: 54px;
                background: none;
                color: transparent;
                border: none;
                outline: none;
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
                z-index: 301;
                option {
                    color: #333;
                }
            }
            &.arrow:after {
                content: '';
                background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;
                background-size: 100% auto;
                display: block;
                height: 28px;
                width: 28px;
                position: absolute;
                right: 15px;
                top: 50%;
                margin-top: -14px;
            }
        }
    }

</style>
