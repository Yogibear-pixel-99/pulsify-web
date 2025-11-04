
export function baseRefHelper (imgPath:string) {

const baseRef = "/pulsifytest";

    if (process.env.NODE_ENV === "production") {
        return baseRef + imgPath;
    } else {
        return imgPath;
}
}