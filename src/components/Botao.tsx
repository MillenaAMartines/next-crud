
interface BotaoProps{ 
    cor? : 'green' | 'blue' | 'red'
    classname? : string
    children: any 
    onClick?: () => void
}
// analisar erro de cor
// from-${cor}-500  to-${cor}-700 ???? mantendo cor nao informada 

export default function Botao(props : BotaoProps) { 
    const cor = props.cor ?? 'green'

    return ( 
        <button onClick={props.onClick}className={`
        bg-gradient-to-r from-${cor}-500  to-${cor}-700  
        text-white px4 py-2 rounded-md
        ${props.classname ? props.classname : ''}
        `}>
            {props.children}
        </button>
    )
}