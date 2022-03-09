import React, {FC} from 'react';

export enum CardVariant {
    autlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: () => void
}

const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 variant,
                                 children,
                                 onClick,
                             }) => {
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.autlined ? "1px solid black" : "none",
            background: variant === CardVariant.primary ? "lightgray" : ""
        }}
             onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Card;