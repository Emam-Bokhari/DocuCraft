import { Fragment } from "react";

export default function AuthorPage({params:{name}}){
    return(
        <Fragment>
            <div>{name}</div>
        </Fragment>
    )
}