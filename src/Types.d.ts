



type todoListType = {
    task : string;
    checked : boolean;
}

type toggleTodo = (todoListType) => void;

type changeHandler = (e:ChangeEvent<HTMLInputElement>) => void;

type submitHandler = (e :FormEvent<HTMLButtonElement>) => void;

type addToListHandler = (string) => void;

