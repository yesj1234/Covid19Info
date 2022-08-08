import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function PieChart({
  data,
  title,
  margin = { top: 30, right: 40, bottom: 30, left: 90 },
}) {
  const styles = {
    root: {
      fontFamily: "consolas, sans-serif",
      textAlign: "center",
      position: "relative",
      width: 600,
      height: 600,
    },
    overlay: {
      position: "absolute",
      top: 0,
      right: margin.right,
      bottom: 0,
      left: margin.left,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 96,
      color: "#FFFFFF",
      // background: "#FFFFFF33",
      textAlign: "center",
      // This is important to preserve the chart interactivity
      pointerEvents: "none",
    },
    totalLabel: {
      fontSize: 24,
    },
  };
  const theme = {
    background: "#FFBD33",
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555",
        },
        text: {
          fill: "#ffffff",
        },
      },
      legend: {
        text: {
          fill: "#aaaaaa",
        },
      },
    },
    grid: {
      line: {
        stroke: "#555555",
      },
    },
  };
  return (
    <div style={styles.root}>
      <ResponsivePie
        data={data}
        margin={margin}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 3,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: true,
            translateX: -43,
            translateY: 51,
            itemsSpacing: 0.5,
            itemWidth: 50,
            itemHeight: 10,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
        theme={theme}
      />
      <div style={styles.overlay}>
        <span style={styles.totalLabel}>{title}</span>
      </div>
    </div>
  );
}

export default PieChart;
