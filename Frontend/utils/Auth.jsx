import axios from "axios";

export async function authToken(req, res) {
  try {
    const response = await axios.get(
      "https://todofullstack-yuny.onrender.com/api/users/token-verify",
      {
        withCredentials: true,
      }
    );

    return response.data.valid; // Returns true if the token is valid
  } catch (error) {
    return false; // Returns false if the token is invalid
  }
}
