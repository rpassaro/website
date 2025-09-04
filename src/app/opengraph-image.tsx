import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0B0F17",
                    color: "#E2E8F0",
                    fontSize: 64,
                    fontWeight: 700,
                    letterSpacing: -1,
                    padding: "40px",
                }}
            >
                Ryan Passaro — Trading Infra & ML Engineer
            </div>
        ),
        { ...size }
    );
}


