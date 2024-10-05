import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "app", "docs");

export const getAllDocuments = () => {
  // console.log(postDirectory,'post directory')
  const fileNames = fs.readdirSync(postDirectory);
  // console.log(fileNames)

  const allDocuments = fileNames?.map((fileName) => {
    const id = fileName.replace(".md", "");
    // console.log(id)
    const fullPath = path.join(postDirectory, fileName);
    console.log(fullPath);

    const filesContent = fs.readFileSync(fullPath, "utf8");
    // console.log(filesContent)

    const matterResult = matter(filesContent);
    // console.log(matterResult);

    return {
      id,
      ...matterResult.data,
    };
  });
  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else if (a.order > b.order) {
      return 1;
    } else {
      return 0;
    }
  });
};
