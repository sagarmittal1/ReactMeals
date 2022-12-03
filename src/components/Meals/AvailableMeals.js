import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Shahi Paneer',
    description: 'Delicious sabzi for everytime',
    price: 150.0,
  },
  {
    id: 'm2',
    name: 'Sev Tamatar',
    description: 'Spicy & tasty sabzi for foodies',
    price: 100.0,
  },
  {
    id: 'm3',
    name: 'Dal Baati Churma',
    description: 'Tradional Rajasthani dish for bring royalness',
    price: 299.99,
  },
  {
    id: 'm4',
    name: 'Idli Sambhar',
    description: 'Healthy & tasty South Indian Dish',
    price: 249.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
