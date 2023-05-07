export type LoginRequest = {
    owner_id: string;
    passwd: string;
};

export type LoginResponse = {
    token: string;
};

export type VerifyResponse = {
    owner_id: string;
};