async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/prikarsartam/Olga__The-Headlineser",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}
  console.log("the model is loaded");

query({"inputs": "The Economic Freedom of the World report comprises measurements across five categories and 165 jurisdictions: size of government, legal system and property rights, sound money, freedom to trade internationally, and regulation. Perhaps the most important facet of the report is that we can look at the data in absolute terms, asking, for example, how well the United States has been doing over time. We can also look at the data in relative terms, asking how well the United States has been doing compared to the other nations of the world. \

We have become accustomed to seeing a steady climb to better lives. Indeed, many of us could not comprehend living as our grandparents did. But thanks to the Fraser Institute, we now have detailed data from 1980-2020, detailing two generations. How do we stack up? \

Many will be surprised that the United States is not at the top of the list of most-free countries. In 2020 the US was seventh, behind Hong Kong, Singapore, Switzerland, New Zealand, Denmark, and Australia. And while seventh in the world is nothing to sneeze at, the US trajectory has been downward for quite some time, if only moderately so. In 1980 and 1990, the US was the second economically freest nation in the world. In 2000, it was third. In 2010 and 2015 it was fifth and sixth, respectively. And by 2020, it was seventh."}).then((response) => {
	console.log(JSON.stringify(response));
});



query({"inputs": "The Economic Freedom of the World report comprises measurements across five categories and 165 jurisdictions: size of government, legal system and property rights, sound money, freedom to trade internationally, and regulation. Perhaps the most important facet of the report is that we can look at the data in absolute terms, asking, for example, how well the United States has been doing over time. We can also look at the data in relative terms, asking how well the United States has been doing compared to the other nations of the world. We have become accustomed to seeing a steady climb to better lives. Indeed, many of us could not comprehend living as our grandparents did. But thanks to the Fraser Institute, we now have detailed data from 1980-2020, detailing two generations. How do we stack up? Many will be surprised that the United States is not at the top of the list of most-free countries. In 2020 the US was seventh, behind Hong Kong, Singapore, Switzerland, New Zealand, Denmark, and Australia. And while seventh in the world is nothing to sneeze at, the US trajectory has been downward for quite some time, if only moderately so. In 1980 and 1990, the US was the second economically freest nation in the world. In 2000, it was third. In 2010 and 2015 it was fifth and sixth, respectively. And by 2020, it was seventh."}).then((response) => {
	console.log(JSON.stringify(response[0]["generated_text"]));
});

query({"inputs": "The Economic Freedom of the World report comprises measurements across five categories and 165 jurisdictions: size of government, legal system and property rights, sound money, freedom to trade internationally, and regulation. Perhaps the most important facet of the report is that we can look at the data in absolute terms, asking, for example, how well the United States has been doing over time. We can also look at the data in relative terms, asking how well the United States has been doing compared to the other nations of the world. We have become accustomed to seeing a steady climb to better lives. Indeed, many of us could not comprehend living as our grandparents did. But thanks to the Fraser Institute, we now have detailed data from 1980-2020, detailing two generations. How do we stack up? Many will be surprised that the United States is not at the top of the list of most-free countries. In 2020 the US was seventh, behind Hong Kong, Singapore, Switzerland, New Zealand, Denmark, and Australia. And while seventh in the world is nothing to sneeze at, the US trajectory has been downward for quite some time, if only moderately so. In 1980 and 1990, the US was the second economically freest nation in the world. In 2000, it was third. In 2010 and 2015 it was fifth and sixth, respectively. And by 2020, it was seventh."}).then((response) => {
	
