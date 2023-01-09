import { useToastContext } from "../context/ToasterContext";

export function Home() {

	const [addErrorToast, addSuccessToast] = useToastContext();

	return (
		<>
			<h1>Simple React Toasts</h1>
			<button onClick={() => { addSuccessToast('Product X added to cart.') }} style={{ marginRight: 10}}>Success toast</button>
			<button onClick={() => { addErrorToast('Payment failed due to X error.') }}>Error toast</button>
		</>
	)
}
