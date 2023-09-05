import "./Container.css";
import { Slider } from "@mui/material";
export default function Container() {
  return (
    <div id="container">
      <div>
        <p>100K page views</p>

<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" id="slider" />

</div>
    </div>
  );
}
