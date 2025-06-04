"use client";
import { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function AttackTypeChart() {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (!chartRef.current) return;

        const root = am5.Root.new(chartRef.current);
        root.setThemes([am5themes_Animated.new(root)]);

        const chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none",
            paddingLeft: 0,
            paddingRight: 0,
        }));

        const xRenderer = am5xy.AxisRendererX.new(root, {
            minGridDistance: 30,
        });

        const xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
            renderer: xRenderer,
            maxDeviation: 0.3,
            max: 10000,
        }));

        const yRenderer = am5xy.AxisRendererY.new(root, {
            inversed: true,
        });

        const yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
            categoryField: "attack",
            renderer: yRenderer,
            tooltip: am5.Tooltip.new(root, {}),
        }));

        const series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Fréquence",
            xAxis,
            yAxis,
            valueXField: "value",
            categoryYField: "attack",
            sequencedInterpolation: true,
            tooltip: am5.Tooltip.new(root, {
                labelText: "{categoryY}: {valueX} cas",
            }),
        }));

        series.columns.template.setAll({
            cornerRadiusTL: 5,
            cornerRadiusBL: 5,
            strokeOpacity: 0,
        });

        series.columns.template.adapters.add("fill", (_, target) => {
            return chart.get("colors")!.getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", (_, target) => {
            return chart.get("colors")!.getIndex(series.columns.indexOf(target));
        });

        const data = [
            { attack: "Phishing", value: 8900 },
            { attack: "Ransomware", value: 8100 },
            { attack: "Malware", value: 7300 },
            { attack: "DDoS", value: 5100 },
            { attack: "Credential Stuffing", value: 4700 },
            { attack: "Supply Chain", value: 3600 },
            { attack: "Zero-Day", value: 2900 },
            { attack: "Cloud Compromise", value: 2600 },
            { attack: "Social Engineering", value: 2100 },
        ];

        yAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        void chart.appear(1000, 100);

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div
            ref={chartRef}
            style={{
                width: "100%",
                maxWidth: "1400px",
                height: "500px",
                margin: "2rem",
            }}
        />
    );
}
