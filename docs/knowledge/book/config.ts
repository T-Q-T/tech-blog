import * as fs from "fs";
// 模板字符串
const templateStr = `---
title: {{ title }}
---
<script setup>
import PdfReaderComponent from './PdfReaderComponent.vue'
const url = '/{{ title }}.pdf';
</script>
<PdfReaderComponent :url="url"/>
`;
const bookFiles = fs
  .readdirSync("docs/knowledge/book/file")
  .map((name) => name.split(".")[0]);

bookFiles.forEach((name) => {
  fs.createWriteStream(`docs/knowledge/book/${name}.md`).write(
    templateStr.replaceAll("{{ title }}", name)
  );
});

export const bookSideBarConfig = bookFiles.map((name) => ({
  text: name,
  link: `/knowledge/book/${name}`,
}));
