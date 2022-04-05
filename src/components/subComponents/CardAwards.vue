<template>
  <div class="card">
    <h2>
      {{ awardData.how }} <br />
      {{ awardData.category }}
    </h2>
    <div class="green number">{{ awardData.number }}</div>
    <h3 class="uppercase">{{ awardData.who }}</h3>
  </div>
</template>

<script>
export default {
  name: "CardAwards",

  props: {
    awardData: Object,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/temporary/variables";

.card {
  text-align: center;
  display: flex;
  flex-basis: calc(100% / 4);
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  border-left: solid 1px $yellowocralight;
  border-right: solid 1px $yellowocralight;
  border-bottom: solid 1px $yellowocralight;
  padding-top: 4rem;
  padding-bottom: 4rem;

  h2 {
    font-size: 1.7rem;
    line-height: 2.2rem;
    padding-bottom: 2rem;
  }

  .number {
    font-size: 4.5rem;
    font-weight: bold;
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
  }
}
</style>
