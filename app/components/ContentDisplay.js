import { Fragment } from "react";
import { getDocumentContent } from "../lib/doc";
import Link from "next/link";

export default async function ContentDisplay({ id }) {
  const documentContent = await getDocumentContent(id);
  console.log(documentContent);
  return (
    <Fragment>
      <article className="prose dark:prose-invert">
        <h1>{documentContent.title}</h1>
      
      <div>
        <span>Published On:{documentContent?.date}</span> by{" "}
        <Link href={`/author/${documentContent?.author}`}>
          Author: {documentContent?.author}
        </Link>{" "}
        <span>
          Under the{" "}
          <Link href={`/categories/${documentContent?.category}`}>
            {documentContent?.category}
          </Link> {" "} category.
        </span>
      </div>
      </article>
    </Fragment>
  );
}
