<template>
  <div>
    <Header></Header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import Tab from "@/components/tab/tab";
export default {
  name: "App",
  components: {
    Header,
    Tab,
  },
};
</script>
