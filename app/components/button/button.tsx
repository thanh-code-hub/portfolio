"use client"
import {Carlito} from "next/font/google";
import './button.scss';

const carlito = Carlito({
	weight: '400',
	subsets: ['latin']
})
export default function MyButton() {
	return <button className={`${carlito.className} rounded-full text-background bg-content`}>Hire me</button>
}