
export function baseRefHelper (imgPath:string) {

const baseRef = "/pulsify";

    if (process.env.NODE_ENV === "production") {
        return baseRef + imgPath;
    } else {
        return imgPath;
}
}