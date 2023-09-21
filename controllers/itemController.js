const patientModel = require('../models/patientModel');
const doctorModel  = require('../models/doctorModel');

// Patient
function getAllItemsPatient() {
    return patientModel.readData().messages;
}

function addMessagePatient(item) {
    var data = patientModel.readData();
    data.messages.push(item);
    patientModel.writeData(data);
}

// Doctor
function getAllItemsDoctor() {
    const messages = doctorModel.readData().messages
    return messages;
}

function addMessageDoctor(item) {
    var data = doctorModel.readData();
    data.messages.push(item);
    doctorModel.writeData(data);
}

module.exports = {
    getAllItemsDoctor,
    getAllItemsPatient,
    addMessageDoctor,
    addMessagePatient
};
