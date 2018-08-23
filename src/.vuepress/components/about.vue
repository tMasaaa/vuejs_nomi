<template>
    <div class="root">
        <div class="word-wrap">
            
            <p>{{ name }}</p>
            <p>{{ live }}</p>
            <p>{{ birthday }}</p>
            <p>{{ like }}</p>
        </div>
        <div class="icon"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "名前 : のみ",
      live: "住んでいるところ : 川",
      birthday: "誕生日 : 内緒",
      like: "好きな食べ物 : 謎"
    }
  }
}
</script>


<style lang="scss" scoped>
.root {
  position: absolute;
  width: 100%;
  height: 100%;

  .word-wrap {
    position: absolute;
    width: 100%;
    top: calc(50%);
    height: 100px;
    font-size: 1.5rem;
    text-align: center;
  }

  .icon {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    top: calc(30% - 100px);
    left: calc(50% - 100px);
    // transform: scale(0);
    background-image: url(../../_assets/nomi.jpg);
    background-position: center;
    background-size: cover;
    border: 1px solid green;
  }
}
// .icon {
//   animation: icon-show 0.3s ease 0.5s forwards;
// }
// @keyframes icon-show {
//   0% {
//     transform: scale(0);
//   }
//   80% {
//     transform: scale(1.2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
</style>