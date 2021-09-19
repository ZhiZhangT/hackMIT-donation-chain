import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

function DonorList() {
  const [name, setName] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [weight, setWeight] = useState(0)
  const [organ, setOrgan] = useState({
    "kidney": true,
    "liver": true,
    "heart": true,
    "lungs": true 
})

const updateOrgan = (e, key) => {
    let organCopy = Object.assign({},organ)
    organCopy[key] = !organCopy[key]
    setOrgan(organCopy)
}
  return (
    <body>
    <nav class="navbar is-white topNav">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="H0.html">
                    OrganChain
                </a>
                <div class="navbar-burger burger" data-target="topNav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="topNav" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="cover.html">Home</a>
                    <a class="navbar-item" href="landing.html">How it works</a>
                    <a class="navbar-item" href="blog.html">Our team</a>
                    <a class="navbar-item" href="instaAlbum.html">Connect</a>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons" formaction="L0.html">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light" formaction="L3.html">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column">
                    <h6 class="title has-text-black">Donor list</h6>
                    <div id="content">

        <h2>Donate Organ</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Organs</th>
              <th scope="col">Blood Type</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody id="donorList">
            { this.props.donor.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{donor.id.toString()}</th>
                  <td>{donor.name}</td>
                  <td>{donor.organs} Eth</td>
                  <td>{donor.weight}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.acceptOrgan(event.target.name, event.target.value)
                          }}
                        >
                          Get organ
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      
    </div>
                    <table class="table">
                        
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>John Doe <strong>(C)</strong>
                            </td>
                            <td>Kidney, liver, heart, lungs</td>
                            <td>O+</td>
                            <td>60</td>
                            
                          </tr>
                          <tr>
 
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </section>
    <script async type="text/javascript" src="../js/bulma.js"></script>
</body>
      
    
    );
  }


export default Main;
