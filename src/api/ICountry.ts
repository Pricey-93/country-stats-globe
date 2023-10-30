export interface ICountry {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    EUR?: Aed;
    AFN?: Aed;
    SRD?: Aed;
    CZK?: Aed;
    SZL?: Aed;
    ZAR?: Aed;
    SYP?: Aed;
    SDG?: BAM;
    TJS?: Aed;
    BOB?: Aed;
    STN?: Aed;
    USD?: Aed;
    AZN?: Aed;
    ETB?: Aed;
    XCD?: Aed;
    TOP?: Aed;
    IQD?: Aed;
    TMT?: Aed;
    DZD?: Aed;
    HNL?: Aed;
    ILS?: Aed;
    LYD?: Aed;
    XPF?: Aed;
    KHR?: Aed;
    VES?: Aed;
    RWF?: Aed;
    LRD?: Aed;
    MXN?: Aed;
    BHD?: Aed;
    BYN?: Aed;
    CLP?: Aed;
    UAH?: Aed;
    MKD?: Aed;
    ANG?: Aed;
    NOK?: Aed;
    GBP?: Aed;
    WST?: Aed;
    LKR?: Aed;
    OMR?: Aed;
    BRL?: Aed;
    EGP?: Aed;
    JOD?: Aed;
    CRC?: Aed;
    AOA?: Aed;
    QAR?: Aed;
    XAF?: Aed;
    ZWL?: Aed;
    COP?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    GTQ?: Aed;
    GGP?: Aed;
    HUF?: Aed;
    KGS?: Aed;
    SGD?: Aed;
    ALL?: Aed;
    SHP?: Aed;
    PLN?: Aed;
    UYU?: Aed;
    BIF?: Aed;
    NGN?: Aed;
    MGA?: Aed;
    XOF?: Aed;
    AMD?: Aed;
    BBD?: Aed;
    KPW?: Aed;
    INR?: Aed;
    JEP?: Aed;
    LAK?: Aed;
    BZD?: Aed;
    SBD?: Aed;
    DJF?: Aed;
    IMP?: Aed;
    KWD?: Aed;
    RUB?: Aed;
    FJD?: Aed;
    FKP?: Aed;
    PHP?: Aed;
    UGX?: Aed;
    KRW?: Aed;
    DKK?: Aed;
    ZMW?: Aed;
    AED?: Aed;
    AUD?: Aed;
    MOP?: Aed;
    CDF?: Aed;
    SOS?: Aed;
    KES?: Aed;
    KYD?: Aed;
    KID?: Aed;
    GNF?: Aed;
    GYD?: Aed;
    LBP?: Aed;
    VUV?: Aed;
    TND?: Aed;
    PAB?: Aed;
    GIP?: Aed;
    BGN?: Aed;
    KMF?: Aed;
    ISK?: Aed;
    MZN?: Aed;
    TVD?: Aed;
    TWD?: Aed;
    RON?: Aed;
    PKR?: Aed;
    MAD?: Aed;
    PYG?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    DOP?: Aed;
    MVR?: Aed;
    BDT?: Aed;
    MNT?: Aed;
    PGK?: Aed;
    BSD?: Aed;
    ARS?: Aed;
    SEK?: Aed;
    BAM?: BAM;
    TZS?: Aed;
    CVE?: Aed;
    BWP?: Aed;
    GEL?: Aed;
    HKD?: Aed;
    MYR?: Aed;
    MRU?: Aed;
    MWK?: Aed;
    SLL?: Aed;
    YER?: Aed;
    CAD?: Aed;
    SAR?: Aed;
    BND?: Aed;
    ERN?: Aed;
    CHF?: Aed;
    IDR?: Aed;
    NAD?: Aed;
    MDL?: Aed;
    MMK?: Aed;
    TTD?: Aed;
    NIO?: Aed;
    NPR?: Aed;
    UZS?: Aed;
    THB?: Aed;
    KZT?: Aed;
    IRR?: Aed;
    FOK?: Aed;
    JMD?: Aed;
    GHS?: Aed;
    TRY?: Aed;
    VND?: Aed;
    AWG?: Aed;
    CNY?: Aed;
    JPY?: Aed;
    BTN?: Aed;
    LSL?: Aed;
    GMD?: Aed;
    RSD?: Aed;
    HTG?: Aed;
    MUR?: Aed;
    SSP?: Aed;
    SCR?: Aed;
    BMD?: Aed;
    PEN?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
