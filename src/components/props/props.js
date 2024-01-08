import { ULlists } from "../ul/ul"
import "./props.css"
import pht from "./../assets/img/1280px-Flag_of_Germany.svg (1).png"
import pht2 from "./../assets/img/1280px-Flag_of_Germany.svg (2).png"
import pht3 from "./../assets/img/1280px-Flag_of_Germany.svg (3).png"
import pht4 from "./../assets/img/1280px-Flag_of_Germany.svg.png"
import pht5 from "./../assets/img/flag1.png"
import pht6 from "./../assets/img/flag2.png"
import pht7 from "./../assets/img/flag3.png"
import pht8 from "./../assets/img/1280px-Flag_of_Germany.svg.png"

export function FnUl(){
    return(
        <ul className="ul">
            <ULlists src={ pht } title="Germany" region="Americas" capital="Brasília"/>
            <ULlists src={ pht2 } title="Germany" region="Europe" capital="Algiers" />
            <ULlists src={ pht3 } title="Germany" region="Africa" capital="Algiers" />
            <ULlists  src={ pht4 } title="Germany" region="Americas" capital="Washington DC" />
            <ULlists  src={ pht5 } title="Germany" region="Asia" capital="Kabul" />
            <ULlists  src={ pht6 } title="Germany" region="Europe" capital="Mariehamn" />
            <ULlists  src={ pht7 } title="Germany" region="Europe" capital="Tirana" />
            <ULlists  src={ pht8 } title="Germany" region="Europe" capital="Algiers" />
        </ul>
    )
}



