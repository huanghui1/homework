export default class {
  onCreate() {
    console.log(this.number);
  }
  onInput(input) {
    // const now = new Date().toString();
    // setInterval(this.timeDown.bind(this), 1000);

    this.state = {
      number: this.number,
    };
    console.log(input);
  }
};
