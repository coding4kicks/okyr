import { IUser, User } from './user';


export class UserService {
  constructor(private ref: Firebase) {}

  private currentUser: User;

  getCurrentUser() : User {
    return this.currentUser;
  }

  setCurrentUser(user: User) : void {
    this.currentUser = user;
  }

  createUser(id: string, name: string, image?: string): void {
    this.ref.push(new User(id, name, image), (error: Error) => {
      if (error) {
        console.error('ERROR @ createUser :', error);
      }
    });
  }

  deleteUser(user: IUser): void {
    this.ref.child(user.key).remove((error: Error) => {
      if (error) {
        console.error('ERROR @ deleteUser :', error);
      }
    });
  }

  updateUser(user: IUser, changes: any): void {
    this.ref.child(user.key).update(changes, (error: Error) => {
      if (error) {
        console.error('ERROR @ updateUser :', error);
      }
    });
  }

  createUserName() : string {

    var firstNamesString : string = 'Artisan, Craftsman, Fisherman, Merchant, Philosopher, General, Magistrate, Praetor, Consul, Censor, ' +
      'Centurion, Tribune, Legionnaire, Agrarian, Vestal, Plebian, Commander, Khan, Regent, Deacon, Abbot, Prior, Dean, Monk, ' +
      'Friar, Cleric, Vicar, Confessor, Scribe, Viceroy, Vasal, Jester, Chancellor, Chamberlain, Constable, Falconer, ' +
      'Grandmaster, Herald, Keeper, Squire, Steward, Minstrel, Bard, Gleeman, Mage, Dragoon, Sergeant, Serf, Culinari, ' +
      'Collegium, Weaver, Spinner, Smith, Poet, Shipwright, Herald, Carpenter, Sailor, Journeyman, Goldsmith, Governor, ' +
      'Emperor, Mariner, Mason, Shepherd, Smelter, Sophist, Sculpter, Painter, Warrior, Writer, Vinter, Sumerian, Acadian, ' +
      'Babylonian, Brigadier, Ensign, Commandant, Officer, Logician, Explorer, Spartan, Pragmatist, Skeptic, Rationalist, ' +
      'Existentialist, Han, Aristocrat, Greek, Roman, Africanus, Trojan, Titan, Tao, Egyptian, Pharoah';
    var firstNames : string[] = firstNamesString.split(', ');

    var lastNamesString : string = 'Confucius, Aristotle, Plato, Socrates, Pythagoras, Caesar, Cicero, Zues, Alexander, Ghengis, ' +
      'Kubla, Newton, Darwin, Aphrodite, Apollo, Ares, Artemis, Venus, Mars, Athena, Minerva, Ceres, Dionysus, Liber, Vulcan, ' +
      'Juno, Mercury, Hermes, Vesta, Poseidon, Neptune, Zeus, Jupiter, Hera, Atlas, Cronus, Prometheus, Thales, Epicurus, ' +
      'Democritus, Zeno, Seneca, Aurelius, Pliny, Kant, Descartes, Nietzshe, Locke, Marx, Rousseau, Aquinas, Hume, Sartre, ' +
      'Russell, Bacon, Hegel, Spinoza, Hobbes, Leibniz, Voltaire, Pascal, James, Smith, Machiavelli, Archimedes, Gauss, ' +
      'Euclid, Euler, Fibonacci, Fermat, Ramanujan, Hilbert, Lovelace, Laplace, Lagrange, Cantor, Boole, Laozi, Sun Tzu, ' +
      'Budha, Siddhartha, Lao Tzu, Rumi, Sadra, Isis, Osiris, Ra, Anubis, Aten, Ishtar, Nabu';
    var lastNames : string[] = lastNamesString.split(', ');

    var username = firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]
    console.log(username);
    return username;
  }


}
