import { Card , Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: number ,
    name: string ,
    price: number ,
    quantity: number,
    imgUrl: string
}

export function StoreItem({ id, name , price , imgUrl }:StoreItemProps) {
    const { 
        getItemQuantity ,
        increaseItemQuantity , 
        decreaseItemQuantity , 
        removeFromCart } = useShoppingCart()

    const itemsQuantity = getItemQuantity(id)
    return (

     <Card        style={{ width: '18rem' }}>
        <Card.Img 
        variant="top" 
        src={imgUrl} 
        height="200px" 
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between 
            align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {itemsQuantity === 0 ? (
                    <Button className="w-100" onClick={() => increaseItemQuantity(id)}>+ add to cart</Button>
                ) : ( 
                <div 
                className="d-flex align-items-center flex-column" 
                style={{gap:"0.5rem"}}
                >

                <div 
                className="d-flex align-items-center 
                justify-content-center" 
                style={{gap:"0.5rem"}}
                > 
                    <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                    <div>
                        <span className="fs-3">{itemsQuantity}</span> in cart
                    </div>
                    <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                </div>
                )}
            </div>
        </Card.Body>
    </Card>
    )
}