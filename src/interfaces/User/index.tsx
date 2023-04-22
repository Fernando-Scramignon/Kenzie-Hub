interface IUser {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    created_at: string;
    updated_at: string;
    avatar_url: string | null;
    techs: Array<ITech>;
    works: Array<IWork>;
}

interface ITech {
    id: string;
    title: string;
    status: string;
    created_at: string;
    updated_at: string;
}

interface IWork {
    id: string;
    title: string;
    deploy_url: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export type { IUser, ITech, IWork };
