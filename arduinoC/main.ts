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
enum TT_Drone_GPIO {
    //% block="IO21"
    21,
    //% block="IO13"
    13,
    //% block="IO15"
    15,
    //% block="IO21"
    21,
}

//% color="#555555" iconWidth=50 iconHeight=40
namespace handle {
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
    //% block="APDS9960有接近时" blockType="boolean"
    export function APDS9960_IsProximity(parameter: any, block: any) {
        Generator.addInclude('APDS9960', '#include <Arduino_APDS9960.h>', false);
        Generator.addSetup('APDS9960.begin', 'APDS.begin();');
        Generator.addObject('proximity', 'int', 'proximity=-1;');
        Generator.addCode("APDS.proximityAvailable()");
    }
    //% block="APDS9960接近值" blockType="command"
    export function APDS9960_GetProximity(parameter: any, block: any) {
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
}
