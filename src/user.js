import React from "react";
import users from "./users.json";
import Image from "./image.js";

const User = () => {
    

    const user = users[Math.floor(Math.random() * users.length)];
    

  return (
    <div>
        <Image/>

      <h1>
        {user.name.title} {user.name.first} {user.name.last}
      </h1>
      
       
    </div>
  );
};

export default User;


/*
// crear un componente que muestre el nombre completo del usuario de manera aleatoria

const user = user[Math.floor(Math.random() * users.length)];

//crear un componente que me arroje background color aleatorio
const color = ["red", "green", "blue", "yellow"];

// crear un componente que me arroje una imagen aleatoria
const img = user[Math.floor(Math.random() * users.length)].picture.large;
*/
