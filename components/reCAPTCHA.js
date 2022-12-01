import {  RecaptchaVerifier} from "firebase/auth";
import {authentication} from "../firebase";




authentication.languageCode = 'it';

firebase.auth().useDeviceLanguage();


window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }
  }, authentication);