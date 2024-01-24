
interface BotaoProps{ 
    cor? : 'green' | 'blue' | 'gray'
    classname? : string
    children: any 
    onClick?: () => void
}

export default function Botao(props : BotaoProps) { 
    const cor = props.cor ?? 'green'

    return ( 
        <button onClick={props.onClick}className={`
        bg-gradient-to-r from-${cor}-500  to-${cor}-700
        text-white px4 py-2 rounded-md
        ${props.classname}
        `}>
            {props.children}
        </button>
    )
}