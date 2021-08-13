import React from 'react'
import "./GetAddress.css"
export default function GetAddress() {
    return (
        <div className = "getaddress__wrapper">
            {/* <form className = "getaddress__shipping"></form>
            <form className = "getaddress__billing"></form> */} 
<form> 
      <div class="row">
        <div class="col-50">
          <h3>Delivery Address</h3>
          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="john@example.com"/>
          <label for="adr">Address</label>
          <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
          <label for="city">City</label>
          <input type="text" id="city" name="city" placeholder="New York"/>

          <div class="row">
            <div class="col-50">
              <label for="state">State</label>
              <input type="text" id="state" name="state" placeholder="NY"/>
            </div>
            <div class="col-50">
              <label for="zip">Zip</label>
              <input type="text" id="zip" name="zip" placeholder="10001"/>
            </div>
          </div>
        </div>        
      </div>
      <button className = "getaddress__btn btn">Proceed to Payment</button>
    </form>
        </div>
    )
}
