export interface Profile {
    firstname: string;
    lastname: string;
    age: number;
    country: string;
    currency: string;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
