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
                exclude: ["AQ"],
                valueField: "value"
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
            stroke: am5.color(0x181414),
            strokeWidth: 0.5,
            strokeOpacity: 0.5,
            tooltipText: "{name}: {value}"
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
        });

        const mapPoints = [
            { latitude: 48.8566, longitude: 2.3522, title: "Paris" },
            { latitude: 40.7128, longitude: -74.0060, title: "New York" },
            { latitude: 35.6895, longitude: 139.6917, title: "Tokyo" },
            { latitude: 55.7558, longitude: 37.6173, title: "Moscou" },
            { latitude: 35.6892, longitude: 51.3890, title: "Téhéran" },
            { latitude: 28.6139, longitude: 77.2090, title: "New Delhi" },
            { latitude: 38.9072, longitude: -77.0369, title: "Washington, D.C." },
            { latitude: 33.6844, longitude: 73.0479, title: "Islamabad" },

            { latitude: 39.9042, longitude: 116.4074, title: "Pékin" },
            { latitude: 31.2304, longitude: 121.4737, title: "Shanghai" },
            { latitude: 23.1291, longitude: 113.2644, title: "Canton (Guangzhou)" },
            { latitude: 34.3416, longitude: 108.9398, title: "Xi'an" },
            { latitude: 22.5431, longitude: 114.0579, title: "Shenzhen" },
            { latitude: 30.5728, longitude: 104.0668, title: "Chengdu" },
            { latitude: 29.5630, longitude: 106.5516, title: "Chongqing" }

        ];

        const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {
            latitudeField: "latitude",
            longitudeField: "longitude"
        }));

        const heatData = [
            { id: "FR", value: 10 },
            { id: "RU", value: 25 },
            { id: "US", value: 40 },
            { id: "CN", value: 18 },
            { id: "IR", value: 30 },
            { id: "IN", value: 22 },
            { id: "PK", value: 8 },
            { id: "AU", value: 12 },
        ];

        polygonSeries.set("heatRules", [{
            target: polygonSeries.mapPolygons.template,
            dataField: "value",
            min: am5.color(0xfff5f5),
            max: am5.color(0xff0000),
            key: "fill"
        }]);

        polygonSeries.data.setAll(heatData);


        pointSeries.bullets.push(() =>
            am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    radius: 6,
                    fill: am5.color(0xff0000),
                    tooltipText: "{title}"
                })
            })
        );

        pointSeries.data.setAll(mapPoints);

        // Zoom
        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

        return () => {
            root.dispose();
        };

    }, []);

    return <div id="chartdiv" style={{ width: "100%", height: "900px" }}></div>;
}