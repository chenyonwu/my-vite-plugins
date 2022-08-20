<template>
  <svg aria-hidden="true" :width="props.size" :height="props.size">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script>
  export default {
    name: 'SvgIcon',
  };
</script>

<script setup>
  import { computed } from 'vue';
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
    size: {
      type: String,
      default: () => {
        return '1em';
      },
    },
  });

  const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
