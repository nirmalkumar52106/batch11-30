import React from "react";
import { details } from "./data";

function List() {
    return (
        <>
            <h2>you have{details.length} students</h2>
            {
                details.length > 0 ? <>
                    {
                        details.map((data) => {
                            return (
                                <>
                                    <h1>{data.name}</h1>
                                    <h3>{data.class}</h3>
                                </>
                            )
                        })
                    }
                </> :
                    <>
                        <h1>loading......</h1>
                    </>
            }


        </>
    )
}

export { List }