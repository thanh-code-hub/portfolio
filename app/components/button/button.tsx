"use client"
import {Poppins} from "next/font/google";
import './button.scss';

const poppins = Poppins({
	weight: '400',
	subsets: ['latin']
})
export default function MyButton() {
	return <button className={`${poppins.className} rounded-full text-background bg-content`}>Hire me</button>
}