import React from 'react'
const SkeletonProduct = () => {
    return (
        <div className="card mb-4 border-0" aria-hidden="true">
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-8"></span>
                </h5>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-8 "></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                </p>
                <a href="#" tabindex="-1" className="btn btn-dark disabled placeholder col-12"></a>
            </div>
        </div>
    );
};


export default SkeletonProduct