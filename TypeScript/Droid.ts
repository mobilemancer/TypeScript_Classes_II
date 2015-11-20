class Droid {
	private holoMessage: string;
	private receiver: string;

	set holographicMessage(message: string) {
		this.holoMessage = message;
	}

	get holographicMessage(): string {
		if (this.receiver === "Obi Wan Kenobi") {
			return this.holoMessage;
		}
	}

	public enterPassCode(code: number): void {
		if (code === 1234) {
			this.receiver = "Obi Wan Kenobi";
		}
	}
}

var droidTest1 = (function() {
	var droid = new Droid();
	droid.holographicMessage = "Help me Obi Wan Kenobi, you are my only hope!";

	console.log(droid.holographicMessage);

	droid.enterPassCode(42);
	console.log(droid.holographicMessage);

	droid.enterPassCode(1234);
	console.log(droid.holographicMessage);
})();