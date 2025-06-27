import sequelize from '../config/database';
import { User } from './user.model';

const models = [User];
sequelize.addModels(models);

// Sincroniza los modelos con la base de datos (solo en desarrollo)
// En producción, utiliza migraciones
async function syncModels() {
  try {
    await sequelize.sync({ force: false }); // `force: true` recrea las tablas (¡cuidado con los datos!)
    console.log('Database synchronized!');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}

export { sequelize, User, syncModels }; // Exporta la instancia y los modelos