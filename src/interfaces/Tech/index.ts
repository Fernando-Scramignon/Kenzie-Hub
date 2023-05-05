import { ITech } from "../User";

interface ITechProps {
    tech: ITech;
}

interface IRegisterTech {
    title: string;
    status: string;
}

interface IRegisterTechModal {
    showTechCreation: boolean;
    alternateTechCreation(): void;
    updateUserFunction(): void;
}

interface IEditTechModal {
    alternateTechEdition(): void;
}

export type { ITechProps, IRegisterTechModal, IRegisterTech, IEditTechModal };
