import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Circle } from 'react-native-svg';
import * as d3Shape from 'd3-shape';

type Slice = {
  label: string;
  value: number;
  color: string;
};

type Props = {
  data: Slice[];
  size?: number; // diameter
  innerRadius?: number; // for donut effect (0 = pie)
  showLegend?: boolean;
  onSlicePress?: (slice: Slice, index: number) => void;
};

export default function PieChart({
  data,
  size = 220,
  innerRadius = 60,
  showLegend = true,
  onSlicePress,
}: Props) {
  const total = data.reduce((s, it) => s + it.value, 0);
  const radius = size / 2;

  // Build pie generator
  const pieGen = d3Shape
    .pie<Slice>()
    .value((d) => d.value)
    .sort(null);

  const arcData = pieGen(data as any);

  // Arc generator: outer radius = radius, inner radius = innerRadius
  const arcGenerator = d3Shape.arc<any>().outerRadius(radius).innerRadius(innerRadius);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G x={radius} y={radius}>
          {arcData.map((arc, index) => {
            const path = arcGenerator(arc) as string;
            const slice = data[index];

            // Wrap each slice in a TouchableOpacity using <Path onPress> is not supported on all platforms,
            // so we place an invisible Circle on top of the slice centroid area for touch handling.
            const [cx, cy] = arcGenerator.centroid(arc);

            return (
              <G key={`slice-${index}`}>
                <Path d={path} fill={slice.color} />
                {/* touch target */}
                {onSlicePress ? (
                  <Circle
                    cx={cx}
                    cy={cy}
                    r={Math.max(18, radius * 0.12)}
                    fill="transparent"
                    onPress={() => onSlicePress(slice, index)}
                  />
                ) : null}
              </G>
            );
          })}
          {/* center circle for donut look (optional) */}
          {innerRadius > 0 ? (
            <Circle cx={0} cy={0} r={innerRadius - 2} fill="#fff" />
          ) : null}
        </G>
      </Svg>

      {showLegend ? (
        <View style={styles.legendContainer}>
          {data.map((d, i) => (
            <View style={styles.legendItem} key={`legend-${i}`}>
              <View style={[styles.legendColor, { backgroundColor: d.color }]} />
              <Text style={styles.legendText}>{d.label} — {d.value} ({((d.value / total) * 100).toFixed(1)}%)</Text>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendContainer: {
    marginTop: 12,
    width: '100%',
    paddingHorizontal: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  legendColor: {
    width: 14,
    height: 14,
    borderRadius: 3,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
});