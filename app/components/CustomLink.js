"use client";

import Link from "next/link";
import { Fragment } from "react";

export default function CustomLink({ children, path }) {
  return (
    <Fragment>
      <Link href={path}>{children}</Link>
    </Fragment>
  );
}
