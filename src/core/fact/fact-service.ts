import { IFact, Fact } from './fact';


export class FactService {
  constructor(private ref: Firebase) {}

  createFact(title: string, url: string): void {
    this.ref.push(new Fact(title, url), (error: Error) => {
      if (error) {
        console.error('ERROR @ createFact :', error);
      }
    });
  }

  deleteFact(fact: IFact): void {
    this.ref.child(fact.key).remove((error: Error) => {
      if (error) {
        console.error('ERROR @ deleteFact :', error);
      }
    });
  }

  updateFact(fact: IFact, changes: any): void {
    this.ref.child(fact.key).update(changes, (error: Error) => {
      if (error) {
        console.error('ERROR @ updateFact :', error);
      }
    });
  }
}
