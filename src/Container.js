import "./Container.css";
import { ImageList, Slider } from "@mui/material";
import { Switch } from "@mui/material";
import { useState } from "react";
import { teal } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import check from "./images/icon-check.svg";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#10D5C2",

    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const cyan = createTheme({
  palette: {
    cyan: {
      main: "#10D5C2",
      light: "#A5F3EB",
    },
  },
});

const CyanSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#10D5C2",
    "&:hover": {
      backgroundColor: alpha("#10D5C2", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#10D5C2",
  },
}));

const myMarks = [
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

const Pricing = {
  1: {
    pageviews: "10K",
    monthly: 8,
    yearly: 72,
  },
  2: {
    pageviews: "50k",
    monthly: 12,
    yearly: 108,
  },
  3: {
    pageviews: "100K",
    monthly: 16,
    yearly: 144,
  },
  4: {
    pageviews: "500k",
    monthly: 24,
    yearly: 216,
  },
  5: {
    pageviews: "1M",
    monthly: 36,
    yearly: 324,
  },
};

/*
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
/*
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
}*/

export default function Container() {
  const [pageviews, setPageviews] = useState(3);
  const [monthly, setMonthly] = useState(true);

  const handleChange = (event, newValue) => {
    setPageviews(newValue);
  };

  return (
    <div id="container">
      <div>
        <p>{`${Pricing[pageviews].pageviews} pageviews`}</p>

        <div id="slider-container">
          <Slider
            aria-label={`${Pricing[pageviews].pageviews} pageviews`}
            defaultValue={3}
            id="slider"
            step={1}
            min={1}
            max={5}
            onChange={(e) => {
              setPageviews(e.target.value);
            }}
          />
        </div>

        <h2>
          {" "}
          $
          {`${Pricing[pageviews][monthly ? "monthly" : "yearly"]} / ${
            monthly ? "month" : "year"
          }`}{" "}
        </h2>

        <div className="switch">
          <p>Monthly Billing</p>

          <CyanSwitch
            size="medium"
            width="80"
            id="switch"
            onChange={() => setMonthly(!monthly)}
          />
          <p>Yearly Billing</p>
          <span id="discount">-25%</span>
        </div>

        <div className="bottom-wrapper">
          <div>
            <p>
              <img src={check} />
              Unlimited websites
            </p>
            <p>
              <img src={check} />
              100% data ownership
            </p>
            <p>
              <img src={check} />
              Email reports
            </p>
          </div>
          <div>
           
              <button className="btn">Start my trial</button>
          
          </div>
        </div>
      </div>
    </div>
  );
}
