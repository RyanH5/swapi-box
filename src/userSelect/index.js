import { cleanPeopleData, cleanVehiclesData, cleanPlanetsData }  from '../cleaner/index';
import fetchStarWarsData from '../fetch/index';
import Card from '../stateful-components/card/index'

const UserSelect = async (category) => {
  const info = await fetchStarWarsData(category);

  if (category === 'people') {
    const resolved = await cleanPeopleData(info);
    return resolved;  
  }
  
  if (category === 'vehicles') {
    const resolved = await cleanVehiclesData(info);
    return resolved;  
  }

  if (category === 'planets') {
    const resolved = await cleanPlanetsData(info);
    return resolved;  
  }

  if (category === 'favorites') {
      
  }
};

export { UserSelect };
