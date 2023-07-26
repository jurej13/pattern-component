import { useState } from "react"
import { ProductCard } from "../components"
import { Product } from "../interfaces/interfaces"
import "../styles/custom-styles.css"

const product1 = {
	id: "1",
	title: "Coffee Mug - Card",
	img: "./coffee-mug.png",
}
const product2 = {
	id: "2",
	title: "Coffee Mug - Card",
	img: "./coffee-mug2.png",
}
const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
	count: number
}

export const ShoppingPage = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart
	}>({})

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						className='bg-dark text-white'
					>
						<ProductCard.Image className='custom-image' />
						<ProductCard.Title className='text-bold' />
						<ProductCard.Buttons className='custom-buttons' />
					</ProductCard>
				))}
			</div>
			<div className='shopping-cart'>
				<ProductCard
					product={product2}
					className='bg-dark text-white'
					style={{ width: "100px" }}
				>
					<ProductCard.Image className='custom-image' />
					<ProductCard.Title className='text-bold' />
					<ProductCard.Buttons className='custom-buttons' />
				</ProductCard>
				<ProductCard
					product={product1}
					className='bg-dark text-white'
					style={{ width: "100px" }}
				>
					<ProductCard.Image className='custom-image' />
					<ProductCard.Title className='text-bold' />
					<ProductCard.Buttons className='custom-buttons' />
				</ProductCard>
			</div>
		</div>
	)
}
