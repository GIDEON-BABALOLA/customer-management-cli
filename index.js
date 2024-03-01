require("dotenv").config()
const mongoose = require("mongoose")
const path = require("path") 
const validate = require(path.join(__dirname, "validateId"))
//connect to db
const connectDB =  mongoose.connect(process.env.MONGODB_URL)
//Import Model
const Customer = require(path.join(__dirname, "models", "customer"))
//Add a customer
 const addCustomer = async  (customer) => {
    try{
       await Customer.create(customer)
      return  console.info("New Customer Added")
    }catch(error){
console.info(error)
    }
}
//Find a customer
 const  findCustomer = async (name) =>{
const search  = new RegExp(name, "i")
try{
const customer = await Customer.find({$or : [{firstname : search}, {lastname : search}]})
console.info(`${customer} \n ${customer.length} matches`)
}catch(error){
    console.info(error)
}
}
//Update a customer
const updateCustomer = async (_id, customer) => {
    if(!validate(_id)){
        return console.log("Invalid Id")
    }
    try{
const newCustomer = await Customer.findByIdAndUpdate({_id}, customer)
if(!newCustomer){
   return console.info("Customer Does Not Exist")
}
console.info("Customer Updated")
    }catch(error){
        console.info(error)
    }
}
const deleteCustomer = async(_id) => {
    if(!validate(_id)){
        return console.log("Invalid Id")
    }
    try{
const deletedCustomer = await Customer.findByIdAndDelete({_id})
if(!deletedCustomer){
    return console.info("Customer Does Not Exist")
 }
console.info("Customer Removed")
    }catch(error){
        console.info(error)
    }
}
const findAllCustomers = async() => {
    try{
    const allCustomers = await Customer.find()
    console.info(`${allCustomers} \n ${allCustomers.length} matches`)
    }catch(error){
        console.info(error)
    }
}
module.exports = {addCustomer, findCustomer, updateCustomer, deleteCustomer, findAllCustomers}