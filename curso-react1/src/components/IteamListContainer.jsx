import React from "react";
import IteamCount from "./IteamCount";

const IteamListContainer = ({greeting}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-warning text-center" role="alert">
                        {greeting}
                    </div>
                </div>
            </div>

            <IteamCount stock={10}/>
            
        </div>
    )
}

export default IteamListContainer