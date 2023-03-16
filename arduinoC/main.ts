enum APDS_9960_gesture {
    //% block="Up"
    GESTURE_UP，
    //% block="Down"
    GESTURE_DOWN，
    //% block="Left"
    GESTURE_LEFT，
    //% block="Right"
    GESTURE_RIGHT,
    //% block="None"
    GESTURE_NONE,
}
enum APDS_9960_Color {
    //% block="Red"
    APr,
    //% block="Green"
    APg,
    //% block="Blue"
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
    //% block="APDS9960 when there are gestures" blockType="boolean"
    export function APDS9960_IsGesture(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('gesture', 'int', 'gesture=-1;');
        Generator.addCode("APDS.gestureAvailable()");
    }
    //% block="APDS9960 get gesture" blockType="command"
    export function APDS9960_GetGesture(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('gesture', 'int', 'gesture=-1;');
        Generator.addCode("gesture = APDS.readGesture();");
    }
    //% block="APDS9960 when the gesture is facing[AG]" blockType="boolean"
    //% AG.shadow="dropdown" AG.options="APDS_9960_gesture" AG.defl="APDS_9960_gesture.GESTURE_NONE"
    export function APDS9960_Gesture(parameter: any, block: any) {
        let ag = parameter.AG.code
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('gesture', 'int', 'gesture=-1;');
        Generator.addCode("gesture==" + ag);
    }
    //% block="APDS9960 when an object is approaching" blockType="boolean"
    export function APDS9960_IsProximity(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addCode("APDS.proximityAvailable()");
    }
    //% block="APDS9960 distance value" blockType="reporter"
    export function APDS9960_GetProximity(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addCode("(APDS.readProximity())");
    }
    //% block="APDS9960 when reading a color" blockType="boolean"
    export function APDS9960_IsColor(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addCode("(APDS.colorAvailable())");
    }
    //% block="APDS9960 get color" blockType="command"
    export function APDS9960_GetColor(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('ColorRGB', 'int', 'APr,APg,APb;');
        Generator.addCode("APDS.readColor(APr, APg, APb);");
    }
    //% block="APDS9960 [CL] value" blockType="reporter"
    //% CL.shadow="dropdown" CL.options="APDS_9960_Color" CL.defl="APDS_9960_Color.APr"
    export function APDS9960_Color(parameter: any, block: any){
        let cl = parameter.CL.code
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('ColorRGB', 'int', 'APr,APg,APb;');
        Generator.addCode(cl);
    }
    //% block="APDS9960 brightness value" blockType="reporter"
    export function APDS9960_GetPix(parameter: any, block: any){
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addCode("RGBtoPIX(APr,APg,APb)");
    }
}
