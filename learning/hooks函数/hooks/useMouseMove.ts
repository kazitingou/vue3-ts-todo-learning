import { ref, onMounted, onUnmounted } from "vue";

export default function useMouseMove() {
  const x = ref(0);
  const y = ref(0);
  const updatePosition = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  //在页面准备完毕之后注鼠标点击事件
  onMounted(() => {
    document.addEventListener("mousemove", updatePosition);
  });
  //
  onUnmounted(() => {
    document.removeEventListener("mousemove", updatePosition);
  });
  return {
    x, y
  }
}