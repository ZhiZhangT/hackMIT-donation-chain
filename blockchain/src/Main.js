import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div id="content">
        <h1>Add Product</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const dName = this.donorName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          const dOrgan = this.donorOrgan.value
          const dBloodType = this.donorBloodType.value
          const dWeight = this.donorWeight.value
          
          this.props.createProduct(dName, price, dOrgan, dBloodType, dWeight)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="donorName"
              type="text"
              ref={(input) => { this.donorName = input }}
              className="form-control"
              placeholder="Product Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Product Price"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="donorOrgan"
              type="text"
              ref={(input) => { this.donorOrgan = input }}
              className="form-control"
              placeholder="Organ"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="donorBloodType"
              type="text"
              ref={(input) => { this.donorBloodType = input }}
              className="form-control"
              placeholder="Blood Type"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="donorWeight"
              type="text"
              ref={(input) => { this.donorWeight = input }}
              className="form-control"
              placeholder="Weight"
              required />
          </div>
          
          
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
        <p>&nbsp;</p>
        <h2>Donate Organ</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.acceptOrgan(event.target.dName, event.target.value)
                          }}
                        >
                          Buy
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
    );
  }
}

export default Main;
