import {Space} from "../model/Model";



export class DataServices{
    public async getSpaces(): Promise <Space[]>{
        const result: Space[] = []
        result.push({
            location: 'Paris',
            name: 'Best location',
            spaceID: '123'
        });
        result.push({
            location: 'Paris',
            name: 'Best location',
            spaceID: '124'
        });
        result.push({
            location: 'Paris',
            name: 'Best location',
            spaceID: '125'
        });
        return result;
    }

    public async reserveSpace(spaceId: string):Promise<string | undefined> {
        if (spaceId === '123') {
            return('5555')
        } else {
            return undefined
        }
    }
}