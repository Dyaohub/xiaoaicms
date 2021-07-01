<template>
  <div>
    <Card></Card>
    <Lines></Lines>
    <Figure></Figure>
    <Order></Order>
  </div>
</template>

<script>
import Card from "../../views/chart/Card";
import Lines from "../../views/chart/Lines";
import Figure from "../../views/chart/Figure";
import Order from "../../views/chart/Order";
export default {
  name: "",
  props: {},
  components: {
    Card,
    Lines,
    Figure,
    Order,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>
