<template>
    <div>
        <h3>Welcome</h3>
    </div>
</template>

<script>
import hub from '../utils/hub.js'
export default {
    name: 'Welcome',
    created() {
        hub.$emit('saveNavState', '')
    }
}
</script>
