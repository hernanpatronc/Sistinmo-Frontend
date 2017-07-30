export enum States
{
    ANPI,
    ANSI,
    ANRI,
    RETI,
    VEYA,
    ASDI,
    XANU,
    REMO
}
export enum Paises
{
    AR,
    BO,
    PE,
    UY,
    PY,
    BR,
    MX,
    CH
}

export enum OFR
{
    OFR=1,
    REQ
}

export enum Operaciones
{
    CV,
    AL
}
export class Property 
{
    LEGAJO: string;
    NOMBRE_INM: string;
    OPERACION: string;
    OFER_REQUE: string;
    estado: States;
    FECHA: Date;
    pais: Paises;
    ofr: OFR;
    tipo_oper: Operaciones;
}