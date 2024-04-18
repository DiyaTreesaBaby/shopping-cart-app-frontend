import React from 'react'
import AddNavbar from './AddNavbar'
import AddButton from './AddButton'

const AddProduct = () => {
  return (
    <div>
      <AddNavbar/>
      <AddButton/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
<div className="row g-3">
  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <label htmlFor="" className="form-label">PRODUCT TITLE</label>
<input type="text" className="form-control" />

  </div>
  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <label htmlFor="" className="form-label">PRODUCT IMAGE</label>
<input type="file" name="" id="" className="form-control" />

  </div>
  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <label htmlFor="" className="form-label">DESCRIPTION</label>
<textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>

  </div>
  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <label htmlFor="" className="form-label">CATEGORY</label>
<select name="" id="" className="form-control">
  <option value="fashion">fashion</option>
  <option value="beauty">beauty</option>
  <option value="electronics">electronics</option>
  <option value="grocery">grocery</option>
</select>

  </div>
  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <label htmlFor="" className="form-label">PRICE</label>
  <input type="text" className="form-control" />


  </div>
  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
  <button className="btn btn-warning"> submit</button>
        

  </div>
</div>

        </div>
    </div>
</div>





    </div>
  )
}

export default AddProduct