<template>
  <div class="mode-container">
    <div class="mode">
      <div class="mode-title">
        <h1>Select Your Study Mode</h1>
      </div>
      <div class="mode-button-container button-group">
        <div class="mode-button">
          <button class="button mode-button" @click="$emit('mode', 'learn')">
            Learn
          </button>
        </div>
        <div class="mode-button">
          <button
            class="button mode-button"
            @click="$emit('mode', 'memorized')"
          >
            Memorized Words
          </button>
        </div>
        <div class="mode-button">
          <button class="button mode-button" @click="$emit('mode', 'test')">
            Test
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectMode",
  setup() {
    const mode = (mode) => {
      console.log(mode);
    };
    return { mode };
  },
};
</script>

<style scoped></style>
