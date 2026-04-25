import myAxios from "./db";
import { redirect } from "react-router";

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

async function sendAuthRequest(email, password, endpoint) {
  const fullEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${FIREBASE_API_KEY}`;
  const data = {
    email,
    password,
    returnSecureToken: true,
  };
  const response = await myAxios.post(fullEndpoint, data);
  return response;
}

export async function signupAction({ request }) {
  // Catch and return errors
  try {
    // Get form data
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    // Send signup request
    const response = await sendAuthRequest(email, password, "signUp");

    // Calculate expiration date/time
    const expiration = new Date(
      new Date().getTime() + response.data.expiresIn * 1000,
    );

    // Create userData
    const localId = response.data.localId;
    const token = response.data.idToken;
    const userData = {
      firstName,
      lastName,
      email,
      localId,
      token,
      expiration,
    };

    // Convert userData to json and store in localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Use Axios to PUT new user to firebase db
    const newUser = {
      firstName,
      lastName,
      email,
      userId: localId,
    };
    const axiosResponse = await myAxios.put(`/users/${localId}.json`, newUser);

    // Redirect
    redirect(request.url);

    // Return response for sign up form to use
    return axiosResponse.data;
  } catch (err) {
    let errorMessage = err.toString();

    // Extract message, making sure the fields exist in the packet
    const errorDetail =
      (err &&
        err.response &&
        err.response.data &&
        err.response.data.error &&
        err.response.data.error.message) ||
      null;
    if (errorDetail) {
      errorMessage += ` ${errorDetail}`;
    }
    return { error: errorMessage };
  }
}

export async function loginAction({ request }) {
  // Catch and return errors
  try {
    // Get form data
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    // Send login request
    const response = await sendAuthRequest(
      email,
      password,
      "signInWithPassword",
    );
    const localId = response.data.localId;
    const token = response.data.idToken;

    // Calculate expiration date/time
    const expiration = new Date(
      new Date().getTime() + response.data.expiresIn * 1000,
    );

    // Retrieve user data from firebase
    const axiosResponse = await myAxios.get(`/users/${localId}.json`);
    const { firstName, lastName } = axiosResponse.data;

    // Build userData object
    const userData = {
      firstName,
      lastName,
      email,
      localId,
      token,
      expiration,
    };

    // Convert userData to json and store in localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect
    redirect(request.url);

    // Return response for sign up form to use
    return userData;
  } catch (err) {
    let errorMessage = err.toString();

    // Extract message, making sure the fields exist in the packet
    const errorDetail =
      (err &&
        err.response &&
        err.response.data &&
        err.response.data.error &&
        err.response.data.error.message) ||
      null;
    if (errorDetail) {
      errorMessage += ` ${errorDetail}`;
    }
    return { error: errorMessage };
  }
}
