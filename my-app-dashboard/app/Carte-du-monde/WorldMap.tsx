"use client";

import React, { useEffect } from "react";
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
                projection: am5map.geoMercator(),
                homeZoomLevel: 2.7,
                homeGeoPoint: { longitude: 20, latitude: 30 }
            })
        );

        const legend = chart.children.push(
            am5.Legend.new(root, {
                useDefaultMarker: true,
                centerX: am5.p50,
                x: am5.p50,
                y: am5.percent(100),
                dy: -30,
                layout: root.horizontalLayout,
                background: am5.RoundedRectangle.new(root, {
                    fill: am5.color(0xffffff),
                    fillOpacity: 1
                })
            })
        );

        legend.valueLabels.template.set("forceHidden", true);

        const baseSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"]
            })
        );

        baseSeries.mapPolygons.template.setAll({
            fill: am5.color(0xe0e0e0),
            stroke: am5.color(0x999999),
            strokeWidth: 0.5
        });


        const severityGroups = [
            {
                name: "Niveau très élevé",
                color: 0x9d0208,
                countries: ["US", "RU", "IR", "CN", ]
            },
            {
                name: "Niveau élevé",
                color: 0xff7900,
                countries: ["IN", "PK", "FR", "GB", "BR", "IL", "KP"]
            },
            {
                name: "Modéré",
                color: 0xffba08,
                countries: ["DE","CA", "AU", "MX", "ID", "ES", "IT", "TR", "KR", "ZA", "NG", "DZ", "EC", "JP", "SY", "UA", "CN-TW", "BD"]
            },
            {
                name: "Faible",
                color: 0x548c2f,
                countries: ["PT", "HU", "AR", "VN", "NZ", "MY", "GR", "MA", "EG", "KE", "TN", "BE", "NL", "PL", "SA", "AE"]
            },
            {
                name: "Très faible",
                color: 0xa3cef1,
                countries: ["NO", "SE", "FI", "CH", "SG", "AT", "IS", "LU", "MT", "SN", "GH", "BW", "GE"]
            }
        ];

        severityGroups.forEach(group => {
            const polygonSeries = chart.series.push(
                am5map.MapPolygonSeries.new(root, {
                    geoJSON: am5geodata_worldLow,
                    include: group.countries,
                    valueField: "value"
                })
            );

            polygonSeries.set("name", group.name);


            polygonSeries.mapPolygons.template.setAll({
                fill: am5.color(group.color),
                tooltipText: "[bold]{name}[/]\nGravité : " + group.name,
                interactive: true
            });

            polygonSeries.mapPolygons.template.states.create("hover", {
                fill: am5.Color.brighten(am5.color(group.color), -0.3)
            });

            polygonSeries.data.setAll(
                group.countries.map(id => ({ id }))
            );


            polygonSeries.events.once("datavalidated", () => {
                polygonSeries.mapPolygons.each(polygon => {
                    polygon.set("fill", am5.color(group.color));
                });
            });

            legend.data.push(polygonSeries);

        });


        // Points lumineux animés
        const pointSeries = chart.series.push(
            am5map.MapPointSeries.new(root, {
                latitudeField: "latitude",
                longitudeField: "longitude"
            })
        );

        const mapPoints = [
            { latitude: 48.8566, longitude: 2.3522, title: "Paris" },
            { latitude: 40.7128, longitude: -74.006, title: "New York" },
            { latitude: 35.6895, longitude: 139.6917, title: "Tokyo" },
            { latitude: 55.7558, longitude: 37.6173, title: "Moscou" },
            { latitude: 35.6892, longitude: 51.389, title: "Téhéran" },
            { latitude: 28.6139, longitude: 77.209, title: "New Delhi" },
            { latitude: 38.9072, longitude: -77.0369, title: "Washington" },
            { latitude: 33.6844, longitude: 73.0479, title: "Islamabad" },
            { latitude: 39.9042, longitude: 116.4074, title: "Pékin" },
            { latitude: 31.2304, longitude: 121.4737, title: "Shanghai" },
            { latitude: 23.1291, longitude: 113.2644, title: "Canton" },
            { latitude: 34.3416, longitude: 108.9398, title: "Xi'an" },
            { latitude: 22.5431, longitude: 114.0579, title: "Shenzhen" },
            { latitude: 30.5728, longitude: 104.0668, title: "Chengdu" },
            { latitude: 29.563, longitude: 106.5516, title: "Chongqing" },
            { latitude: -25.7461, longitude: 28.1881, title: "Pretoria" },
            { latitude: 9.0579, longitude: 7.4951, title: "Abuja" },
            { latitude: 36.7529, longitude: 3.0420, title: "Alger" },
            { latitude: 30.0444, longitude: 31.2357, title: "Le Caire" },
            { latitude: -1.2921, longitude: 36.8219, title: "Nairobi" },
            { latitude: 36.8065, longitude: 10.1815, title: "Tunis" },
            { latitude: 14.6928, longitude: -17.4467, title: "Dakar" },
            { latitude: 5.5600, longitude: -0.2050, title: "Accra" },
            { latitude: -24.6282, longitude: 25.9231, title: "Gaborone" },
            { latitude: 45.4215, longitude: -75.6972, title: "Ottawa" },        // 🇨🇦 Canada
            { latitude: 19.4326, longitude: -99.1332, title: "Mexico" },        // 🇲🇽 Mexique
            { latitude: -15.7939, longitude: -47.8828, title: "Brasilia" },     // 🇧🇷 Brésil
            { latitude: 40.4168, longitude: -3.7038, title: "Madrid" },         // 🇪🇸 Espagne
            { latitude: 51.5072, longitude: -0.1276, title: "Londres" },        // 🇬🇧 Royaume-Uni
            { latitude: 39.9208, longitude: 32.8541, title: "Ankara" },         // 🇹🇷 Turquie
            { latitude: 41.9028, longitude: 12.4964, title: "Rome" },           // 🇮🇹 Italie
            { latitude: 52.5200, longitude: 13.4050, title: "Berlin" },         // 🇩🇪 Allemagne
            { latitude: -35.2809, longitude: 149.1300, title: "Canberra" },     // 🇦🇺 Australie
            { latitude: -6.2088, longitude: 106.8456, title: "Jakarta" },       // 🇮🇩 Indonésie
            { latitude: 37.5665, longitude: 126.9780, title: "Séoul" },         // 🇰🇷 Corée du Sud
            { latitude: 39.0392, longitude: 125.7625, title: "Pyongyang" },     // 🇰🇵 Corée du Nord
            { latitude: -0.1807, longitude: -78.4678, title: "Quito" },
            { latitude: 33.5130695, longitude: 36.3095814, title: "Damas" },
            { latitude: 31.7788242, longitude: 35.2257626, title: "Jérusalem" }
        ];

        pointSeries.bullets.push(() => {
            const circle = am5.Circle.new(root, {
                radius: 6,
                tooltipText: "{title}",
                fill: am5.color(0xff3b3b),
                fillOpacity: 0.8,
                stroke: am5.color(0xffffff),
                strokeWidth: 1
            });

            circle.animate({
                key: "radius",
                from: 2,
                to: 10,
                duration: 800,
                loops: Infinity,
                easing: am5.ease.out(am5.ease.cubic)
            });

            circle.animate({
                key: "fillOpacity",
                from: 1,
                to: 0,
                duration: 800,
                loops: Infinity,
                easing: am5.ease.out(am5.ease.cubic)
            });

            return am5.Bullet.new(root, {
                sprite: circle
            });
        });

        pointSeries.data.setAll(mapPoints);

        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

        chart.appear(1000, 100);

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <div id="chartdiv" style={{ width: "100%", height: "900px" }}></div>
            <div
                style={{
                    width: "20%",
                    height: "300px",
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    padding: "1rem",
                    overflowY: "auto",
                    fontFamily: "sans-serif"
                }}
            >
                <h3 style={{ borderBottom: "1px solid gray", paddingBottom: "0.5rem" }}>
                    🌍 Top 10 des pays les plus visés
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>1. 🇺🇸 États-Unis</li>
                    <li>2. 🇮🇷 Iran</li>
                    <li>3. 🇷🇺 Russie</li>
                    <li>4. 🇨🇳 Chine</li>
                    <li>5. 🇮🇳 Inde</li>
                    <li>6. 🇵🇰 Pakistan</li>
                    <li>7. 🇫🇷 France</li>
                    <li>8. 🇩🇪 Allemagne</li>
                    <li>9. 🇯🇵 Japon</li>
                    <li>10. 🇨🇦 Canada</li>
                </ul>
            </div>
        </div>
    );
}
