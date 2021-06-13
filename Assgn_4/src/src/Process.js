import React from "react";

import Form1 from "./Forms/form1.js.js";
import Form2 from "./Forms/form2.js.js";
import Form3 from "./Forms/form3.js.js";
import Form4 from "./Forms/form4.js.js";
import Form5 from "./Forms/form5.js.js";
import Form6 from "./Forms/form6.js.js";
import Form7 from "./Forms/form7.js";
import Form8 from "./Forms/form8.js";
import Form9 from "./Forms/form9.js";
import Form10 from "./Forms/form10.js";
import Form11 from "./Forms/form11.js";
import Form12 from "./Forms/form12.js";
import Form13 from "./Forms/form13.js.js";
import Form14 from "./Forms/form14.js.js";

function Process(props) {
  switch (props.value) {
    case "place1":
      return <Form1 />;

    case "place2":
      return <Form2 />;

    case "place3":
      return <Form3 />;

    case "place4":
      return <Form4 />;

    case "place5":
      return <Form5 />;

    case "place6":
      return <Form6 />;

    case "place7":
      return <Form7 />;

    case "place8":
      return <Form8 />;

    case "place9":
      return <Form9 />;

    case "place10":
      return <Form10 />;

    case "place11":
      return <Form11 />;

    case "place12":
      return <Form12 />;

    case "place13":
      return <Form13 />;

    case "place14":
      return <Form14 />;

    default:
      return <h2>Continent!</h2>;
  }
}

export default Process;