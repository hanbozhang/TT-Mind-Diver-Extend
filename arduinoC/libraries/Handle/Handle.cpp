#include "Handle.h"

//获取按键数值
bool Handle::getBtnC(int cBtn)
{
    bool ret=false;
    switch (cBtn)
    {
    case 0:
        ret=!digitalRead(LBTN);
        break;
    case 1:
        ret=!digitalRead(RBTN);
        break;
    }
    btnflushed();
    if (cBtn>=2)
    {
        cBtn-=2;
        ret=(BtnC>>BtnToStr[cBtn])&0x01;
    }
    return ret;
}
//刷新按键实时数据
void Handle::btnflushed()
{
    BtnC=0x00;
    digitalWrite(HC165_CL,LOW);
    digitalWrite(HC165_PL,LOW);
    digitalWrite(HC165_PL,HIGH);
    for (size_t i = 0; i < 8; i++)
    {
        if (!digitalRead(HC165_DT))
        {
            BtnC|=(0x01<<i);
        }
        digitalWrite(HC165_CL,LOW);
        digitalWrite(HC165_CL,HIGH);
    }
    digitalWrite(HC165_CL,LOW);
    digitalWrite(HC165_PL,LOW);
}
//刷新摇杆实时数值
void Handle::flushed()
{
    handle_LX = ((analogRead(LX) - HLXJZ) / 50) * 2;
    handle_LY = ((analogRead(LY) - HLYJZ) / 50) * -2;
    handle_RX = ((analogRead(RX) - HRXJZ) / 50) * 2;
    handle_RY = ((analogRead(RY) - HRYJZ) / 50) * -2;
}
//返回摇杆字符串数据用于无人机解析
String Handle::getLXLYRXRY()
{
    flushed();
    return "LX" + String(handle_LX) + "LY" + String(handle_LY) + "RX" + String(handle_RX) + "RY" + String(handle_RY);
}
//返回按键使能数据用于无人机解析
String Handle::getBTNS()
{
    String ret="";
    btnflushed();
    if (!digitalRead(LBTN))
        ret+="1";
    else
        ret+="0";
    if(!digitalRead(RBTN))
        ret+="1";
    else
        ret+="0";
    for (size_t i = 0; i <8; i++)
    {
        if(((BtnC>>BtnToStr[i])&0x01)==1)
            ret+="1";
        else
            ret+="0";
    }
    return ret;
}
//返回单个摇杆维度数值
int Handle::getrocker(int rock)
{
    flushed();
    switch (rock)
    {
    case 0:
        return handle_LX;
    case 1:
        return handle_LY;
    case 2:
        return handle_RX;
    case 3:
        return handle_RY;
    default:
        return 0;
    }
}