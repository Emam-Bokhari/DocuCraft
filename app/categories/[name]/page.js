import { Fragment } from "react";

export default function CategoryPage({ params: { name } }) {
  return (
    <Fragment>
      <div>{name}</div>
    </Fragment>
  );
}
