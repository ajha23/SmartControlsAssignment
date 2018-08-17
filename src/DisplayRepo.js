import React from 'react'

const DisplayRepo = ({ results }) => {
    return (
        <React.Fragment>
            <div className="w3-padding-32 w3-content" id="portfolio">
                <h2 className="w3-text-grey" hidden={results}>My Repositories</h2>
                <hr className="w3-opacity" />
                <div className="w3-row-padding" style={{ margin: "0 -16px", fontSize: "12px" }}>
                    {results.map(val => {
                        return (

                            <div key={val.name} className="w3-half">
                                <div className="w3-card-2 w3-hover-shadow w3-padding-32 w3-center" style={{ height: "200px", maxWidth: "100%", margin: "2px" }} >
                                    <div className="w3-container">
                                        <b >{val.name}</b>
                                        <ul>
                                            <li>Stars:{val.stargazers_count}</li>
                                            <li>Forks:{val.forks}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>

        </React.Fragment>
    )
}


export default DisplayRepo