enum courseModuleTypes {
	FirstModule = "Primeiro módulo",
	SecondModule = "Segundo módulo",
	ThirdModule = "Terceiro módulo",
	FourthModule = "Quarto módulo",
}

interface IRegister {
	email: string;
	password: string;
	name: string;
	contact: string;
	course_module?: courseModuleTypes;
	bio?: string;
	avatar_url: string;
}

export type { IRegister };
export { courseModuleTypes };
