import { Fragment } from "react";

export default function TagPage({params:{name}}){
    return(
        <Fragment>
            <div>{name}</div>
        </Fragment>
    )
}