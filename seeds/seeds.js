const sequelize = require('../config/connection');
const { User, Reviews } = require('../models');

const userData = require('./userData.json');
const reviewsData = require('./reviewsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const reviews of reviewsData) {
    await Reviews.create({
      ...reviews,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
