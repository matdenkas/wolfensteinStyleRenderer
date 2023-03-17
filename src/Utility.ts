import { Vec2 } from "./Vec2"

function cartesianToRadian(cartesianCords: Vec2) {
    return Math.tan(cartesianCords.y / cartesianCords.x);
}

function radianToDegree(radians: number) {
    return radians * 180 / Math.PI;
}

function cartesianToDegree(cartesianCords: Vec2) {
    return radianToDegree(cartesianToRadian(cartesianCords));
}

function degreesToRadians(degrees: number) {
    return degrees * (180 / Math.PI);
}

function radianToCartesian(radians: number) {
    return new Vec2(
        Math.cos(radians),
        Math.sin(radians)
    );
}

function degreesToCartesian(degrees: number) {
    return radianToCartesian(degreesToRadians(degrees));
}
