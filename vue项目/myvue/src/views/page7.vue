<template>
  <div>
    <div class="container">
      <div class="sun-and-moon"></div>
      <div class="mountain-common mountain-a"></div>
      <div class="mountain-common mountain-b"></div>
    </div>
    <div class="poetry-top poetry">
      <div id="dan"></div>
      <div id="yuan"></div>
      <div id="ren"></div>
      <div id="chang"></div>
      <div id="jiu"></div>
    </div>
    <div class="poetry-down poetry">
      <div id="qian"></div>
      <div id="li"></div>
      <div id="gong"></div>
      <div id="chan"></div>
      <div id="juan"></div>
    </div>
  </div>
</template>
<script>
import HanziWriter from 'hanzi-writer'
export default {
  data() {
    return {};
  },
  mounted() {
    const timerA = setTimeout(() => {
      clearTimeout(timerA);
      const moon = document.getElementsByClassName("sun-and-moon")[0];
      moon.style.animation = "moon-bigger 5s";
      moon.style.width = "600px";
      moon.style.height = "600px";
      moon.style.top = "calc( 50vh - 300px )";
      moon.style.left = "calc( 40vw - 300px )";

      const mountainList = document.getElementsByClassName("mountain-common");
      mountainList[0].style.animation = "mountain-down-a 5s";
      mountainList[0].style.top = "100vh";
      mountainList[1].style.animation = "mountain-down-b 5s";
      mountainList[1].style.top = "100vh";
    }, 9000);
    const arr = new Array(60);
    for (const item of arr) {
      const dom = document.createElement("div");
      dom.className = "star";
      dom.style.left = `${Math.random() * 100}vw`;
      dom.style.top = `${Math.random() * 100}vh`;
      setTimeout(() => {
        document.body.appendChild(dom);
      }, 15000 * Math.random());
    }
    const BASE_CONFIG = {
    width: 60,
    height: 60,
    padding: 2,
    delayBetweenStrokes: 0,
    strokeAnimationSpeed: 2,
    showCharacter: false,
    showOutline: false,
  }
  const WRITER_CONFIG = {
    ...BASE_CONFIG,
    strokeColor: '#f9dc60'
  };

  const getWriterList = () => {
    let writerList = [];
    writerList.push(HanziWriter.create('dan', '但', WRITER_CONFIG));
    writerList.push(HanziWriter.create('yuan', '愿', WRITER_CONFIG));
    writerList.push(HanziWriter.create('ren', '人', WRITER_CONFIG));
    writerList.push(HanziWriter.create('chang', '长', WRITER_CONFIG));
    writerList.push(HanziWriter.create('jiu', '久', WRITER_CONFIG));
    writerList.push(HanziWriter.create('qian', '老', WRITER_CONFIG));
    writerList.push(HanziWriter.create('li', '婆', WRITER_CONFIG));
    writerList.push(HanziWriter.create('gong', '我', WRITER_CONFIG));
    writerList.push(HanziWriter.create('chan', '爱', WRITER_CONFIG));
    writerList.push(HanziWriter.create('juan', '你', WRITER_CONFIG));
    return writerList;
  }

  const generateAnimateWriter = async (writerList) => {
    const writerCount = writerList.length;
    for (const writer of writerList) {
      await writer.animateCharacter();
    }
  }
  generateAnimateWriter(getWriterList());

  },
};
</script>
<style scoped lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
.poetry div {
  width: 60px;
  height: 60px;
  margin-top: 6px;
}

.poetry-top {
  position: absolute;
  top: 20vh;
  right: 48px;
}

.poetry-down {
  position: absolute;
  top: 30vh;
  right: 130px;
}
@keyframes nightfall {
  from {
    background: #9dc1df;
  }

  16% {
    background: #416cc9;
  }

  32% {
    background: #e58732;
  }

  50% {
    background: #e55327;
  }

  to {
    background: #2a2d38;
  }
}

.container {
  width: 100vw;
  height: 100vh;
  transition: all ease;
  animation: nightfall 8s;
  background: #2a2d38;
  overflow: hidden;
}

@keyframes sunfallmoonrise {
  from {
    background: #ffffff;
    top: 10vh;
  }

  16% {
    background: #ffff54;
  }

  32% {
    background: #e63724;
  }

  50% {
    background: #e93324;
    top: 80vh;
  }

  to {
    background: #f9dc60;
    top: 10vh;
  }
}

.sun-and-moon {
  width: 200px;
  height: 200px;
  animation: sunfallmoonrise 8s;
  border-radius: 50%;
  position: absolute;
  left: 20vw;
  top: 10vh;
  background: #f9dc60;
  box-shadow: 0px 0px 20px #f9dc60;
  transition: all 3s ease;
  z-index: 10;
}

@keyframes mountain {
  from {
    background: rgb(25, 175, 75);
  }

  16% {
    background: rgb(168, 192, 35);
  }

  32% {
    background: rgb(199, 106, 31);
  }

  50% {
    background: rgb(167, 66, 26);
  }

  to {
    background: rgb(56, 56, 27);
  }
}

.mountain-common {
  position: absolute;
  z-index: 999;
  border-radius: 50%;
  background: rgb(56, 56, 27);
  animation: mountain 8s;
}

.mountain-a {
  width: 80vw;
  height: 400px;
  top: 80vh;
  left: -20vw;
}

.mountain-b {
  width: 100vw;
  height: 800px;
  top: 65vh;
  left: 40vw;
}

@keyframes moon-bigger {
  from {
    width: 200px;
    height: 200px;
    left: 20vw;
    top: 10vh;
  }

  to {
    width: 600px;
    height: 600px;
    top: calc(50vh - 300px);
    left: calc(40vw - 300px);
  }
}

@keyframes mountain-down-a {
  from {
    top: 80vh;
    left: -20vw;
  }

  to {
    top: 115vh;
    left: -300px;
    opacity: 0.6;
  }
}

@keyframes mountain-down-b {
  from {
    top: 65vh;
    left: 40vw;
  }

  to {
    top: 100vh;
    left: calc(60vw - 300px);
    opacity: 0.6;
  }
}
@keyframes star-scale {
  from {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(0.1, 0.1);
  }

  50% {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(2, 2);
  }

  to {
    transform: scale(1, 1);
  }
}

.star {
  height: 3px;
  width: 3px;
  background-color: #f9dc60;
  border-radius: 50%;
  position: absolute;
  animation: star-scale 2s;
  animation-iteration-count: infinite;
}
</style>
