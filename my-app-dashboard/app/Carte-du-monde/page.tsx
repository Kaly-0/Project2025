"use client";

import WorldMap from './WorldMap';

export default function CarteDuMondePage() {
    return (
        <div style={{ background: "linear-gradient(135deg, #0A2540, #2C3E50)", minHeight: "100vh" }}>
            <WorldMap />
        </div>
    );
}