class Colors {
    static colorPrimary: string = "#FF577F";
    static colorPrimary50: string = "#FF427F";
    static colorPrimaryDisable: string = "#59323F";
    static grey4: string = "#121214";
    static grey3: string = "#212529";
    static grey2: string = "#343B41";
    static grey1: string = "#868E96";
    static grey0: string = "#F8F9FA";
    static success: string = "#3FE864";
    static negative: string = "#E83F5B";
    static white: string = "#ffffff";
}

interface IModules {
    "Primeiro módulo": string;
    "Segundo módulo": string;
    "Terceiro módulo": string;
    "Quarto módulo": string;
}

const MODULES_MAP: any = {
    "Primeiro módulo": "Primeiro módulo (introdução ao frontend)",
    "Segundo módulo": "Segundo módulo (frontend avançado)",
    "Terceiro módulo": "Terceiro módulo (introdução ao backend)",
    "Quarto módulo": "Quarto módulo (backend avançado)",
    "Não especificado": "Módulo não especificado",
};

export { Colors, MODULES_MAP };
