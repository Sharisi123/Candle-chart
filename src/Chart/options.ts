export const options = {
  annotations: {
    alwaysOutside: true,
    textStyle: {
      fontSize: 15,
      color: "#000",
      auraColor: "none",
    },
  },
  series: {
    0: {
      targetAxisIndex: 1,
    },
  },
  bar: {
    groupWidth: 20,
  },
  legend: { position: "none" },
  candlestick: {
    fallingColor: {
      strokeWidth: 0,
      fill: "#a52714",
    }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};
