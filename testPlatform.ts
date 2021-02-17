import { Platform, Devices } from "./platform";

let p1 = new Platform("PC", 1950, "Mac", 64, "Gen4", false, 1024, true, Devices.cartucho, "negro");

p1.attributeConsole()

console.log(p1.isPlatform(p1))