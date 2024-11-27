(async () => {
	const elems = {
		button_squeeze: document.getElementById("squeeze"),
		sentence_span: document.getElementById("the-sentence")
	}
	const lib = {
		utils: {
			randomizer: (limit) => {
				return Math.floor(Math.random() * limit)
			}
		},
		sentence: {
			adjectives: ["beautiful", "ugly", "colorful", "professional"],
			nouns: ["man", "person", "horse", "individual"],
			verbs: ["writes", "walks", "screams", "becomes", "studies"],
			adverbs: ["gracefully", "professionally", "elegantly", "menacingly"],
			sentence_generate: function () {
				return `${this.adjectives[lib.utils.randomizer(this.adjectives.length)]} ${this.nouns[lib.utils.randomizer(this.nouns.length)]} ${this.verbs[lib.utils.randomizer(this.verbs.length)]} ${this.adverbs[lib.utils.randomizer(this.adverbs.length)]}.`
			}
		}
	}
	const events = {
		squeeze_click: {
			call: async () => {
				const sentence = lib.sentence.sentence_generate()
				elems.sentence_span.style.opacity = "0"
				await new Promise(resolve => setTimeout(resolve, 200));
				elems.sentence_span.innerHTML = sentence
				elems.sentence_span.style.opacity = "1"
				await new Promise(resolve => setTimeout(resolve, 200));
			},
			add: () => {
				elems.button_squeeze.addEventListener("click", events.squeeze_click.call)
			},
			remove: () => {
				elems.button_squeeze.removeEventListener("click", events.squeeze_click.call)
			}
		}
	}
	events.squeeze_click.add();
})();
