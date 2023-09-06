import "./Container.css";
import { Slider } from "@mui/material";
import { useState } from "react";

const marks = [
  {
    value: 0,
    scaledValue: 10000,
    label: "10K",
    price: "$8",
  },
  {
    value: 25,
    scaledValue: 50000,
    label: "50K",
    price: "$12",
  },
  {
    value: 50,
    scaledValue: 100000,
    label: "100K",
    price: "$16",
  },
  {
    value: 75,
    scaledValue: 500000,
    label: "500K",
    price: "$24",
  },
  {
    value: 100,
    scaledValue: 1000000,
    label: "1M",
    price: "$36",
  },
];

const scale = (value) => {
  const previousMarkIndex = Math.floor(value / 25);
  const previousMark = marks[previousMarkIndex];
  const remainder = value % 25;
  if (remainder === 0) {
    return previousMark.scaledValue;
  }
  const nextMark = marks[previousMarkIndex + 1];
  const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
  return remainder * increment + previousMark.scaledValue;
};

function showLabel(ofValue) {
  if (scale(ofValue) > 10000 && scale(ofValue) < 50000) {
    return [  marks[0].label, marks[0].price ];
  }
  if (scale(ofValue) > 50000 && scale(ofValue) < 100000) {
    return marks[1].label;
  }
  if (scale(ofValue) > 100000 && scale(ofValue) < 500000) {
    return marks[2].label;
  }
  if (scale(ofValue) > 500000 && scale(ofValue) < 1000000) {
    return marks[3].label;
  }
  if (scale(ofValue) >= 999999) {
    return marks[4].label;
  }
}

export default function Container() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="container">
      <div>
        <p>{showLabel(value[0])}</p>

        <div id="slider-container">
          <Slider
            style={{ width: 300 }}
            id="slider"
            aria-label="Pricing"
            defaultValue={50}
            onChange={handleChange}
            scale={scale}
          />
        </div>

        <h2> </h2>
      </div>
    </div>
  );
}
