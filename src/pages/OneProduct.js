import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function OneProduct() {
  return (
    <>
        <div clasName="container" style={{ backgroundColor: "#f5f7fa"}}>
            <div clasName="card">
                {/* <div clasName="card-body d-flex flex-row">
                    <div>
                        <h5 clasName="card-title font-weight-bold mb-2">New spicy meals</h5>
                    </div>
                </div> */}
                <div clasName="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                    <img clasName="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                        alt="" />
                    <a href="#!">
                    <div clasName="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div clasName="card-body">
                    <p clasName="card-text collapse" id="collapseContent">
                        Recently, we added several exotic new dishes to our restaurant menu. They come from
                        countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
                        our juicy meals from around the world.
                    </p>
                    <div clasName="d-flex justify-content-between">
                        <a clasName="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse" href="#collapseContent"
                        role="button" aria-expanded="false" aria-controls="collapseContent">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default OneProduct