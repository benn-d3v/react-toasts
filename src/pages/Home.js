import { useToastContext } from "../context/ToasterContext";

export function Home() {

	const [addErrorToast, addSuccessToast] = useToastContext();

  return (
    <>
			<h1>Simple React Toasts</h1>
			<button onClick={() => { addSuccessToast('Product X added to cart.') }}>Success</button>
			<button onClick={() => { addErrorToast('Payment failed due to X error.') }}>Error</button>
    </>
  )
}
