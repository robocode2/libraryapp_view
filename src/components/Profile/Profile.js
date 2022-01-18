import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Profile = () => {
  async function getUserlists() {
    const auth = firebase.auth();
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());

    const userlists = await axios.get("http://localhost:8080/lists", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    axios
      .get(
        "http://localhost:8080/lists",
        {
          title: values.title,
          isbn: values.isbn,
          description: values.description,
        }
        /* {
          headers: {
            Authorization: "Bearer " + token,
          },
        } */
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  return <div className="Userlists"></div>;
};

export default Profile;
