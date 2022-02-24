import React, { useRef, useMemo } from "react";
import { ReactECharts, ReactEChartsProps } from "../ReactEChartsFull";
// import { ReactECharts, ReactEChartsProps } from './ReactECharts';

//
export const Template = () => {
  const option: ReactEChartsProps["option"] = useMemo(() => ({}), []);

  // style={{ height: 400 }}
  return <ReactECharts option={option} />;
};
