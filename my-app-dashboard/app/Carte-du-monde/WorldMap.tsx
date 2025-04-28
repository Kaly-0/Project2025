"use client";

import React, { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function WorldMap() {
    useEffect(() => {

        const root = am5.Root.new("chartdiv");


        root.setThemes([am5themes_Animated.new(root)]);


        const chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "translateX",
                panY: "translateY",
                projection: am5map.geoMercator()
            })
        );


        const polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"]
            })
        );


        const labelSeries = am5.Container.new(root, {
            x: am5.percent(2),
            y: am5.percent(90),
            layout: root.verticalLayout
        });

        labelSeries.children.push(
            am5.Label.new(root, {
                text: "n°1",
                fontSize: 16,
                fill: am5.color(0xffffff),
                fontWeight: "500",
            })
        );

        labelSeries.children.push(
            am5.Label.new(root, {
                text: "n°2",
                fontSize: 16,
                fill: am5.color(0xffffff),
                fontWeight: "500",
            })
        );

        labelSeries.children.push(
            am5.Label.new(root, {
                text: "n°3",
                fontSize: 16,
                fill: am5.color(0xffffff),
                fontWeight: "500",

            })

        );

        // Apparence des pays
        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            toggleKey: "active",
            interactive: true,
            fill: am5.color(0xECE5E5)
        });

        // État quand on survol
        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color(0xE3C0C0)
        });

        // État quand on clique dessus
        polygonSeries.mapPolygons.template.states.create("active", {
            fill: am5.color(0x3b7cb9)
        });

        //Bordures
        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            toggleKey: "active",
            interactive: true,
            fill: am5.color(0xBDD6E7),
            stroke: am5.color(0x181414),
            strokeWidth: 0.5,
            strokeOpacity: 0.5
        })

        // Zoom
        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

        return () => {
            root.dispose();
        };

    }, []);

    return <div id="chartdiv" style={{ width: "100%", height: "900px" }}></div>;
}