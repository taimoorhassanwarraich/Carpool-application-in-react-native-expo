import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { authentication } from '../firebase'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'


const ForgotPassword = () => {


const user = authentication.currentUser;    
const email = authentication.currentUser.email

const auth = getAuth();
  sendPasswordResetEmail(auth,email)
  .then(()=>{
    alert("password reset Email sent")
  }).catch((error)=>{
    console.log(error)
  })
}

export default ForgotPassword