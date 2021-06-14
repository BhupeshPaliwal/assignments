import React from "react";
import ImageId from "./Thundurus.png";

function Form13() {
  return (
    <div>
      <h2>Thundurus</h2>
      <img src={ImageId} />
      <form>
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

export default Form13;