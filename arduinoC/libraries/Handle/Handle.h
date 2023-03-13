#ifndef _C_Handle_H_
#define _C_Handle_H_
#pragma once
#include "Arduino.h"

#define LBTN 25
#define RBTN 26
#define LX 32
#define LY 35
#define RX 34
#define RY 33
#define HC165_PL 19
#define HC165_CL 21
#define HC165_DT 5

class Handle
{
private:
    //四个摇杆维度的校准值
    int HLXJZ, HLYJZ, HRXJZ, HRYJZ;
    //四个摇杆维度的实时数值
    int handle_LX, handle_LY, handle_RX, handle_RY;
    //C1-C8按键实时数据存储
    char BtnC;
    const int BtnToStr[8]={7,4,6,5,0,3,1,2};
public:
    Handle(void)
    {
        pinMode(HC165_DT, INPUT_PULLUP);
        pinMode(HC165_CL, OUTPUT);
        pinMode(HC165_PL, OUTPUT);
        HLXJZ = analogRead(LX);
        HLYJZ = analogRead(LY);
        HRXJZ = analogRead(RX);
        HRYJZ = analogRead(RY);
        digitalWrite(HC165_CL,HIGH);
        digitalWrite(HC165_PL,HIGH);
    }
    bool getBtnC(int cBtn);
    void flushed();
    void btnflushed();
    String getLXLYRXRY();
    String getBTNS();
    int getrocker(int rock);
};

#endif