import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
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
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
