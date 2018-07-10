import React from 'react'
import "./PaymentInfo.css";


const PaymentInfo = () => (
<div>
    <div className="col-md-8 order-md-1 pay">
          <h4 className="mb-3">Update Profile</h4>
          <form className="needs-validation" novalidate>
            <div className="row">
            <div className="fix">
              <a href="https://placeholder.com"><img className="imgplace" src="http://via.placeholder.com/350x150"/></a>
              </div>
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="firstName">Country</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">State</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label for="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label for="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="mb-3">
              <label for="photos">Upload Image<span className="text-muted">(350x150)</span></label>
              <input type="email" className="form-control" id="email" placeholder="your photo here"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            

            {/* <hr className="mb-4"></hr> */}
            
            {/* <h4 className="mb-3">Credit Card</h4> */}

            {/* <Credit/> */}
          </form>
        </div>
</div>
)

export default PaymentInfo;