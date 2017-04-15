var ClozeCard = function (text, cloze) {
	if (this instanceof ClozeCard) {
		this.text = text;
		this.cloze = cloze;
	
		// method which removes answer from text and displays remaining text
		this.partialText = function () {
			
		};

		this.brokenCloze = function () {

		};
	} else {
		return new ClozeCard(text, cloze);
	};	
};

 

module.exports = ClozeCard; 
