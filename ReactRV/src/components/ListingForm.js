import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

const ListingForm = () => {
  
  const [listing, setListing] = useState({
    landownerid: 2,
    description: '',
    price: '',
    location: '',
    photo: ''
  })

  const changeHandler = ev => {
    console.log('value', ev.target.value)
    
    let value = ev.target.value;

    setListing({
      ...listing,
      [ev.target.name]: value
    });

    console.log('object', listing);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('listing',listing);

    axiosWithAuth().post(`https://rventure.herokuapp.com/api/listing/`, listing)
    .then(res => {
        console.log('res', res);
      })

  };

  return (
    <div>
      <h1>List Someone's Adventure Here!</h1>
      <form onSubmit={handleSubmit}>
        {/* <label>
          <div>
            Where is the space located?
          </div>
          <div>
            <input 
              type='text' 
              placeholder='Street Address'
              value={listing.streetAddress}
              onChange={changeHandler} 
            />
          </div>
          <div>
            <input 
              type='text' 
              placeholder='Apt., suite (optional)' 
              value={listing.apt}
              onChange={changeHandler} 
            />
          </div>
          <div>
            <input 
              type='text' 
              placeholder='City' 
              value={listing.city}
              onChange={changeHandler} 
            />
            <input 
              type='text' 
              placeholder='State' 
              value={listing.state}
              onChange={changeHandler} 
            />
          </div>
          <div>
            <input 
              type='text' 
              placeholder='Zip' 
              value={listing.zip}
              onChange={changeHandler} 
            />
          </div>
        </label> */}
        {/* <div>
          <label>
            What amenities do you offer?
            <div>
              <div>
                <label>
                  Electric hookups:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
              <div>
                <label>
                  Waste plumbing:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
              <div>
                <label>
                  Water:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
              <div>
                <label>
                  Wifi:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
              <div>
                <label>
                  Pet friendly:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
            </div>
          </label>
        </div> */}
        
        <div>
          <label>
            Description <input 
              type='text' 
              placeholder=''
              onChange={changeHandler} 
              name='description'
              value={listing.description}
            />
        </label>
        </div>

        <div>
          <label>
            Location <input 
              type='text' 
              placeholder=''
              onChange={changeHandler} 
              name='location'
              value={listing.location}
            />
        </label>
        </div>

        <div>
          <label>
            Price per day ($) <input 
              type='text' 
              placeholder=''
              onChange={changeHandler} 
              name='price'
              value={listing.price}
            />
        </label>
        </div>

        <div>
          <label>
          Photo <input 
              type='text' 
              placeholder='http://url.com/img.png'
              onChange={changeHandler} 
              name='photo'
              value={listing.photo}
            />
        </label>
        </div>



        <div>
          <button>Submit Listing</button>
        </div>
      </form>
      <br />
      <br />
    </div>
  )
}

export default ListingForm;