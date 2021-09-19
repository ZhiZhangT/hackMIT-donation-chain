const organDonation = artifacts.require("./OrganDonationNetwork");

contract('organDonation', (accounts) => {
  before(async () => {
    this.organDonationChain = await organDonation.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.organDonationChain.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('functions on the blockchain.', async () => {
    const address = await this.organDonationChain.address
    console.log("the address is: ", address)
    const signingUp = await this.organDonationChain.signUpForDonation(0, 1, 3, "Texas")
    const donor = await this.organDonationChain.donors[this.organDonationChain.LogDonor.donor]
    assert.equal(donor.donor, address)
    assert.equal(donor.bloodType, 0)
    assert.equal(donor.organ, 1)
    assert.equal(donor.size, 3)
    assert.equal(donor.location, "Texas")
    assert.equal(donor.patient, address)
  })
})