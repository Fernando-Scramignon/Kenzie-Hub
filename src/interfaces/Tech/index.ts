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
    tech: ITech;
    showTechEdition: boolean;
    alternateTechEdition(): void;
}

export type { ITechProps, IRegisterTechModal, IRegisterTech, IEditTechModal };
