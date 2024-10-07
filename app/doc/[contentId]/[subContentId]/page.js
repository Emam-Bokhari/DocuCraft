import ContentDisplay from "@/app/components/ContentDisplay";
import { Fragment } from "react";

export default function SubContentPage({params:{subContentId}}){
    return(
        <Fragment>
            <ContentDisplay id={subContentId} />
        </Fragment>
    )
}