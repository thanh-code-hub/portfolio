import "./about.scss"

export default function AboutPage() {
	return <main className="grid grid-cols-3 gap-x-12 min-h-screen items-center p-24 bg-background">
		<div className="flex justify-center items-center">
			<img src="/ava.png" alt="avatar"/>
		</div>
		<div className="col-span-2 flex flex-col justify-center items-start">
			<h1 className="text-5xl leading-loose">Thanh Bui</h1>
			<p>Nullam sed ante ac nisi pharetra congue. Nullam nibh est, ornare in libero eu, euismod accumsan quam.
				Duis non tortor accumsan, gravida nunc vel, dictum nulla. Suspendisse vel felis vulputate, sodales augue
				in, bibendum sem. Vivamus orci tortor, lobortis eu bibendum at, sollicitudin nec nisl. Pellentesque ut
				sollicitudin nunc. Aliquam at tellus congue, posuere turpis a, interdum nisl.

			</p>
		</div>
	</main>
}