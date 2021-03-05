<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <a class="button" :style="{ color }" href="fb-messenger://share/?link=https://video-react.js.org/&app_id=123456789">
      <MessengerIcon :color="color" /> Messenger
    </a>
    <a class="button" :style="{ color }" href="https://api.whatsapp.com/send?text=https://video-react.js.org" data-action="share/whatsapp/share">
      <WhatsappIcon :color="color" /> Whatsapp
    </a>
  </div>
</template>

<style lang="scss" scoped>
.button + .button {
  margin-left: 20px;
}
</style>
