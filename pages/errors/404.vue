<template>
    <div>
        <h1 v-if="error === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
    </div>
</template>

<script>
export default {
    props: ["error"],
    layout: "error" // you can set a custom layout for the error page
};
</script>

<style></style>
