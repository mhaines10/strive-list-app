import mockData from '../Data/MockData.json';
import { Person } from '../Models/Person';

export const GetPeople = (queryString: string): Person[] => {
    let filteredList: Person[] = mockData.filter(x => x.name.toLowerCase().startsWith(queryString.toLowerCase())).map((x) => (
        {name: x.name, desc: x.description, avatar: x.avatar, id: x.id}
    )).sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    return filteredList;
}
