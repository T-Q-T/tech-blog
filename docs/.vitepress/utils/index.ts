import { readdirSync } from "fs";

type Config = {
  basePath: string;
  baseLink: string;
  titleMap: {
    [key: string]: string;
  };
  sortingArr?: string[];
};
/**
 * 根据目录生成侧边栏配置
 */
export function genSidebarConfig(conf: Config) {
  const { baseLink, basePath, titleMap } = conf;
  const dirList = readdirSync(basePath)
    .filter((name) => !name.includes(".ts"))
    .sort((a, b) => (conf.sortingArr?.includes(a) ? -1 : 0) || +conf.sortingArr?.includes(b) || parseInt(a) - parseInt(b));
  const res = dirList
    .filter((name) => name !== "index.md")
    .map((dirName) => {
      const name = dirName.replace(".md", "");
      if (dirName.endsWith(".md")) {
        return {
          text: titleMap[name] || name,
          link: `${baseLink}/${name}`,
        };
      }
      const config = {
        basePath: `${basePath}/${dirName}`,
        baseLink: `${baseLink}/${dirName}`,
        titleMap,
      };
      const itemsConfig = genSidebarConfig(config);
      return {
        text: titleMap[name] || name,
        link: config.baseLink,
        items: itemsConfig.sort((a, b) => parseInt(a.text) - parseInt(b.text)),
        collapsed: true,
      };
    });

  // 用于更改父级的link路径，如果当前目录下有 index.md 文件，则将 baseLink 设置为目录名，否则设置为第一个子目录
  if (dirList.includes("index.md")) {
    conf.baseLink += "/";
  } else {
    conf.baseLink += "/" + dirList[0].replace(".md", "");
  }

  return res;
}
