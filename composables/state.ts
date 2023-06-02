import Person from "~/Domain/Person";

export const usePerson = () =>
    useState<number>(() => 0);