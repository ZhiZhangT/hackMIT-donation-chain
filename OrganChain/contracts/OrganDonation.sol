// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract OrganDonation{
    // m stands for minux and p stands for plus
    enum BloodType {
        Om, Op, Bm, Bp, Am, Ap, ABm, ABp
    }

    enum Organ {
        kidney, pancreas, intestine, liver, lung
    }


    struct OrganDonor {
        // address donor;
        // address patient;
        bytes32 name;
        uint organ;
        uint blood_type;
        uint weight;        
    }

    struct Patient {
        uint weight;
        BloodType[] blood_type;
        address identity;
    }

    struct MatchedPair {
        address donor;
        address patient;
    }

    //set attributes
    mapping( address => Patient ) public patients;
    mapping( address => OrganDonor ) public donors;

    MatchedPair[] public pairs;

    // once someone has signed up for a donation, emit logDonor event with donor details
    // add this donor to a list of available donors and match against a database(e.g. MongoDB) for a patient
    // app will then emit a matchPairs event which will add to a list of paired Patients
    event LogDonor(
        address donor,
        BloodType bloodType,
        Organ organ
    );

    event LogPairs(
        MatchedPair[] pairs
    );

    event completeMatch(
        address donor,
        address patient
    );

    // create a sign up form in the UI
    // do form validation before sending this api call
    uint hi; 

    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public returns(uint){
        return storedData;
    }
    // function donateOrgan(bytes32 name, uint bloodType, uint organ, uint weight) public{
    //     hi = bloodType;
    //     donors[msg.sender] = OrganDonor(

    // )
    //     // donors[address(0)].name = name; 
    //     // donors[address(0)].organ = organ; 
    //     // donors[address(0)].blood_type = bloodType;
    //     // donors[address(0)].weight = weight;

    //     // emit LogDonor(msg.sender, bloodType, n);
    // }

    //after sending donor event to database
    //once database found a pair, send an api call to match patient and add to list of pairs
    function matchPairs(address donor, address patient) public {
        // require(donor != patient, "You cant have the same address for Donor and patient");
        // require(donor != address(0), "Donor is not valid");
        // require(donors[donor].patient==address(0), "Donor has already completed donation");

        pairs.push(
            MatchedPair(
                donor,
                patient
            )
        );
    }

    //button in hospital UI to check current matched pairs
    function viewPairs() public view returns(MatchedPair[] memory currentPairs){
        currentPairs = pairs;
    }

    function CompleteDonation(address donor, address patient) public{
        // require(donor != address(0));
        // require(patient != address(0));
        // donors[donor].patient = patient;
        // remove matched pair
        emit completeMatch(donor, patient);
    }

    function withdrawDonation(address donor) public{
        // require(donor != address(0));
        // require(donors[donor].patient == address(0));
        delete donors[donor];
    }

    function viewDonors(address donor) public view returns(OrganDonor memory organDonor){
        organDonor = donors[donor];
    }

    // todo: what about organs obtained from deceased patients? how do we account for that
    // todo: change matched pairs from array to mappings
    // todo: what to do if there is already a matched pair but donor withdraw


    ///receive() external payable {

    ///}
}
