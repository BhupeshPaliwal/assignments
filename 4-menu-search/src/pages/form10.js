import React from "react";
import ImageId from "./Latios.png";

function Form10() {
  return (
    <div>
      <h2>Latios</h2>
      <form>
        <img src={ImageId} />
        <label for="fname">Nickname:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label for="lname">Abilities:</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <input type="submit" value="Add to Team" />
      </form>
    </div>
  );
}

export default Form10;
