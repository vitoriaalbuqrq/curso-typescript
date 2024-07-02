import React from 'react'

interface Props {
    name: string
}

const FirstComponent = (props: Props) => {
    return (
        <div>
            <p>Meu primeiro Componente</p>
            <p>O nome dele é {props.name}</p>
        </div>
    )
}

export default FirstComponent
