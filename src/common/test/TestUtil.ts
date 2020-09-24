import { User } from "../../models/user.model";
import { Credor } from "../../models/credor.model";

export default class TestUtil {
  static getGiveMeUser(): User {
    const user = new User();
    user.email = "valid@gmail.com";
    user.name = "Chico Bento";
    user.id = 1;

    return user;
  }

  static getFirstCredor(): Credor {
    const credor = new Credor();
    credor.id = 1;
    credor.nome = 'HOT BEL LTDA';
    credor.cnpj = '02.871.155/0001-29';
    credor.fantasia = 'HOT BEL';
    
    return credor;
  }
}