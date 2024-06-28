<template>
  <canvas class="pdf-canvas" style="border: 1px solid black"></canvas>
  <el-pagination
    layout="prev, pager, next"
    :total="total"
    @current-change="handlePageChange"
  />
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, defineProps, watchEffect } from "vue";

const props = defineProps({
  url: String,
});

let pdfDoc: any = null;
let canvas: HTMLCanvasElement = null;
let context: CanvasRenderingContext2D = null;

const scale = 1.5;
const total = ref(0);

const initPdf = async (url) => {
  try {
    const pdfjsLib = globalThis.pdfjsLib;

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs";
    const pdf = await pdfjsLib.getDocument(url).promise;
    pdfDoc = pdf;
    await renderPage(1);
  } catch (error) {
    console.error("Error while loading PDF:", error);
  }
};

const renderPage = async (num) => {
  try {
    const page = await pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext: context,
      viewport,
    };
    await page.render(renderContext).promise;
    total.value = pdfDoc.numPages;
  } catch (error) {
    console.error("Error while rendering PDF:", error);
  }
};

const handlePageChange = (newPageNumber) => {
  renderPage(newPageNumber);
};

onMounted(() => {
  setTimeout(() => {
    canvas = document.querySelector(".pdf-canvas") as HTMLCanvasElement;
    context = canvas.getContext("2d");
    initPdf(props.url);
  }, 1000);
});

watchEffect(() => {
  if (props.url) {
    initPdf(props.url);
  }
});
</script>

<style>
.el-pager li.number,
.el-pager li.more {
  margin-top: 0px;
}
.vp-doc ul, .vp-doc ol{
  padding-left:0
}
</style>
