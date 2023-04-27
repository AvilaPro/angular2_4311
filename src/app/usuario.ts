export class Usuario {
    usuario: string;
    correo: string;
    telefono: string;
    password: string;
    score: number;

    constructor(u:string, c:string, t:string, p:string){
        this.usuario = u;
        this.correo = c;
        this.telefono = t;
        this.password = p;
        this.score = 0
    }

    getScore(){
        return this.score;
    }

    sumarScore(a: number){
        return this.score += a;
    }

    restarScore(a: number){
        return this.score += a;
    }
}
