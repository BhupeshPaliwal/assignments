import React from "react";

import Form1 from "./pages/form1.js";
import Form2 from "./pages/form2.js";
import Form3 from "./pages/form3.js";
import Form4 from "./pages/form4.js";
import Form5 from "./pages/form5.js";
import Form6 from "./pages/form6.js";
import Form7 from "./pages/form7.js";
import Form8 from "./pages/form8.js";
import Form9 from "./pages/form9.js";
import Form10 from "./pages/form10.js";
import Form11 from "./pages/form11.js";
import Form12 from "./pages/form12.js";
import Form13 from "./pages/form13.js";
import Form14 from "./pages/form14.js";
import Form15 from "./pages/form15.js";
import Form16 from "./pages/form16.js";

function SwitchResult(props) {
  switch (props.value) {
    case "magmar":
      return <Form1 />;

    case "drowzee":
      return <Form2 />;

    case "gengar":
      return <Form3 />;

    case "slaking":
      return <Form4 />;

    case "zubat":
      return <Form5 />;

    case "bagon":
      return <Form6 />;

    case "taurus":
      return <Form7 />;

    case "goldeen":
      return <Form8 />;

    case "mewtwo":
      return <Form9 />;

    case "latios":
      return <Form10 />;

    case "uxie":
      return <Form11 />;

    case "heatran":
      return <Form12 />;

    case "thundurus":
      return <Form13 />;

    case "hooh":
      return <Form14 />;

    case "lugia":
      return <Form15 />;

    case "zapdos":
      return <Form16 />;

    default:
      return <h2>Welcome To Poke-Mania!</h2>;
  }
}

export default SwitchResult;
