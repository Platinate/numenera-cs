export default interface IArtifact {
    id:number;
  name: string;
  discharge: string;
  description: string;
}

export class Artifact implements IArtifact {
    id:number;
    name: string;
    discharge: string;
    description: string;
    constructor() {
        this.id = Math.ceil(Math.random()*100);
        this.name = '';
        this.discharge = '';
        this.description = '';
    }
}
