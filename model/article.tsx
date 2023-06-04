export type Article = {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    thumbnail: string;
    tags: string[];
    created_at: string;
    updated_at: string;
    is_public: boolean;
};

export type ReadRequest = {
    id: string;
};

export type ReadResponse = {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    thumbnail: string;
    tags: string[];
    created_at: string;
    updated_at: string;
    is_public: boolean;
};

export type PostRequest = {
    title: string;
    subtitle: string;
    body: string;
    thumbnail: string;
    tags: string[];
    is_public: boolean;
};

export type PostResponse = {
    id: string;
};

export type DeleteRequest = {
    id: string;
};

export type UpdateRequest = {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    thumbnail: string;
    tags: string[];
    is_public: boolean;
};
