import {Poppins, Radley} from "next/font/google";
import './home.scss'
import MyButton from "@/app/components/button/button";

const radley = Radley({
	weight: '400',
	subsets: ['latin'],
})

const poppins = Poppins({
	weight: '400',
	subsets: ['latin']
})

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
			<div className="flex flex-col flex-item-container justify-center">
				<h1 className={`${radley.className} text-black`}><i>Hello</i>, <span className="text-content">I am Thanh</span></h1>
				<p className={`${poppins.className} text-black`}>Code is love, code is live</p>
			</div>
			<MyButton/>
		</main>
	)
}
