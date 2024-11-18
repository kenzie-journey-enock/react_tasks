import FruitCard from './FruitCard';
import fruits from './fruits_list.json';

export default function FruitsList(){
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <FruitCard 
            key={fruit.id}
            name={fruit.name} 
            category={fruit.category} 
            price={fruit.price} 
          />
        ))}
      </ul>
    </>
  )
}