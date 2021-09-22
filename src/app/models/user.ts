export interface User {
    id?: number;
    name?: string;
    userName?: string;
    userType?: number;
    email?: string;
    password?: string;
    contact?: string;
    address?: string;
    pinCode?: string;
    cityId?: number;
    stateId?: number;
    city?: string;
    state?: string;
}

export interface City {
    id?: number;
    name: string;
}

export interface State {
    id?: number;
    name: string;
}

export interface UserFeedback {
    id?: number; //user ID
    rating?: number;
    opinionText?: string;
    reviewTitle?: string;
    termsAccept?: boolean;
    timeStamp?: string;
}