enum APDS_9960_gesture {
    //% block="向上"
    GESTURE_UP，
    //% block="向下"
    GESTURE_DOWN，
    //% block="向左"
    GESTURE_LEFT，
    //% block="向右"
    GESTURE_RIGHT,
    //% block="无"
    GESTURE_NONE,
}
enum APDS_9960_Color {
    //% block="红"
    APr,
    //% block="绿"
    APg,
    //% block="蓝"
    APb,
}
enum TT_Drone_GPIO {
    //% block="IO13"
    13,
    //% block="IO15"
    15,
    //% block="IO21"
    21,
}

//% color="#555555" iconWidth=50 iconHeight=40
namespace APDS9960 {
    //% block="APDS9960有手势时" blockType="boolean"
    export function APDS9960_IsGesture(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('gesture', 'int', 'gesture=-1;');
        Generator.addCode("APDS.gestureAvailable()");
    }
    //% block="APDS9960获取手势" blockType="command"
    export function APDS9960_GetGesture(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('gesture', 'int', 'gesture=-1;');
        Generator.addCode("gesture = APDS.readGesture();");
    }
    //% block="APDS9960手势[AG]时" blockType="boolean"
    //% AG.shadow="dropdown" AG.options="APDS_9960_gesture" AG.defl="APDS_9960_gesture.GESTURE_NONE"
    export function APDS9960_Gesture(parameter: any, block: any) {
        let ag = parameter.AG.code
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('gesture', 'int', 'gesture=-1;');
        Generator.addCode("gesture==" + ag);
    }
    //% block="APDS9960有物体靠近时" blockType="boolean"
    export function APDS9960_IsProximity(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addCode("APDS.proximityAvailable()");
    }
    //% block="APDS9960接近值" blockType="reporter"
    export function APDS9960_GetProximity(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addCode("(APDS.readProximity())");
    }
    //% block="APDS9960读取到颜色时" blockType="boolean"
    export function APDS9960_IsColor(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addCode("(APDS.colorAvailable())");
    }
    //% block="APDS9960获取颜色" blockType="command"
    export function APDS9960_GetColor(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('ColorRGB', 'int', 'APr,APg,APb;');
        Generator.addCode("APDS.readColor(APr, APg, APb);");
    }
    //% block="APDS9960[CL]色数值" blockType="reporter"
    //% CL.shadow="dropdown" CL.options="APDS_9960_Color" CL.defl="APDS_9960_Color.APr"
    export function APDS9960_Color(parameter: any, block: any){
        let cl = parameter.CL.code
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('ColorRGB', 'int', 'APr,APg,APb;');
        Generator.addCode(cl);
    }
    //% block="APDS9960亮度值" blockType="reporter"
    export function APDS9960_GetPix(parameter: any, block: any){
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addCode("RGBtoPIX(APr,APg,APb)");
    }
}
