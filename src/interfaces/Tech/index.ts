import { ITech } from "../User";

interface ITechProps {
    tech: ITech;
}

interface IRegisterTechModal {
    showTechCreation: boolean;
    alternateTechCreation(): void;
}

export type { ITechProps, IRegisterTechModal };
