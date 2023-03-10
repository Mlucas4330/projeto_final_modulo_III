import { v4 as createUuid } from 'uuid';
import { NoteModel } from './note.model';

export class UserModel {
    private _id: string;

    constructor(private _name: string, private _email: string, private _password: string, private _note?: string[]) {
        this._id = createUuid();
        this._note = this._note ?? [];
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get email() {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get password() {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }

    public get id() {
        return this._id;
    }

    public get tasks(): string[] {
        return this._note ?? [];
    }

    public toJson() {
        return {
            id: this._id,
            name: this._name,
            email: this._email,
            password: this._password,
            tasks: this._note
        };
    }

    public static create(name: string, email: string, password: string, id: string, note?: string[]) {
        const user = new UserModel(name, email, password, note);
        user._id = id;

        return user;
    }
}
