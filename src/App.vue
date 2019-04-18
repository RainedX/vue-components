<template>
    <div id="app">
        <div id="nav">
            <ul>
                <li>
                    <router-link to="/form" tag="p">具有数据校验功能的表单组件 —— Form</router-link>
                </li>
                <li>
                    <router-link to="/checkbox" tag="p">组合多选框组件 —— Checkbox</router-link>
                </li>
            </ul>
        </div>
        <hr>
        <router-view class="view"></router-view>
    </div>
</template>
<script>
export default {};
</script>

<style>
li {
    list-style: none;
}
</style>
