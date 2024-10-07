import ContentDisplay from "@/app/components/ContentDisplay";
import { Fragment } from "react";

export default function ContentPage({ params: { contentId } }) {
  return (
    <Fragment>
      <ContentDisplay id={contentId} />
    </Fragment>
  );
}
