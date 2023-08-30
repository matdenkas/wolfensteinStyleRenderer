import { Vec2 } from "./Vec2"

export function cartesianToRadian(cartesianCords: Vec2) {
    return Math.atan2(cartesianCords.y, cartesianCords.x);
}

export function radianToDegree(radians: number) {
    return radians * (180 / Math.PI);
}

export function cartesianToDegree(cartesianCords: Vec2) {
    return radianToDegree(cartesianToRadian(cartesianCords));
}

export function degreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180);
}

export function radianToCartesian(radians: number) {
    return new Vec2(
        Math.cos(radians),
        Math.sin(radians)
    );
}

export function degreesToCartesian(degrees: number) {
    return radianToCartesian(degreesToRadians(degrees));
}
