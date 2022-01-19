import React, { useState } from "react";
import Axios from "axios";
import  "./Joke.css";

function Jokes() {
	const [joke, setJoke] = useState("");

	const getJoke = () => {
		const url =
			"https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";
		Axios.get(url).then((response) => {
			console.log(response.data.joke.category);
			setJoke(response.data.joke + "..." + response.data.category);
		});
	};

	return (
		<div className='container'>
			<div id ="jokes">{joke}</div>
			<button type='button' onClick={getJoke}>
				Get Jokes
			</button>
		</div>
	);
}

export default Jokes;

