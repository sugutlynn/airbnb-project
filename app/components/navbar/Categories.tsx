import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiWindmill, GiBoatFishing, 
    GiCactus, GiCaveEntrance, GiForestCamp, GiIsland, GiCastle, GiBarn } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { FaSkiing } from 'react-icons/fa';
import { IoDiamond } from 'react-icons/io5';

import Container from '../Container';
import CategoryBox from '../Categorybox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property is close to the windmills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Island',
        icon: GiIsland,
        description: 'This property is on  an Island!'
    }, {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a castle!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities!'
    }, {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property has snow'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property has caves!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the Desert!'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is the Barn!'
    }, {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is luxurious'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a castle!'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }


    return ( 
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category === item.label}
                    icon={item.icon}
                     />
                ))}
             </div>

        </Container>
        
     );
}
 
export default Categories;