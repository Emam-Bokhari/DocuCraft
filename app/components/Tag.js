import Link from "next/link";
import { Fragment } from "react";

export default function Tag({ tag }) {
  return (
    <Fragment>
      <Link
        key={tag}
        href={`/tags/${tag}`}
        className="bg-gray-200 p-1 rounded-md mr-2 text-xs"
      >
        {tag}
      </Link>
    </Fragment>
  );
}
