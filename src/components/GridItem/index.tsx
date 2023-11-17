import { Level } from "../../helpers/imc"
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
    item: Level

}

export const GridItem = ({ item }: Props) => {
    return (
        <div className="flex-1 text-white rounded-2xl flex flex-col justify-center items-center p-2" style={{ backgroundColor: item.color }}>

            <div className="gridIcon">
                <img 
                src={item.icon === 'up' ? upImage : downImage} 
                alt="icon up" 
                width={30} />
            </div>

            <div className="text-2xl font-bold mt-5">{item.title}</div>

            {item.yourImc &&
                <div className="text-base m-5">Seu IMC é de {item.yourImc} kg p/m²</div>
            }

            <div className="my-4 text-sm">
                <>
                    O IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>

        </div>
    );
};
