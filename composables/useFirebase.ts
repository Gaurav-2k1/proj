// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// export const createUser = async (email, password) => {
//   const auth = getAuth();
//   const credentials = await createUserWithEmailAndPassword(
//     auth,
//     email,
//     password
//   ).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
//   return credentials;
// };

// // ----------------
// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// //   Sign In

// // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// //   OnAuth

// // import { getAuth,  } from "firebase/auth";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
