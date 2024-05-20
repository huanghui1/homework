import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export default class {
  onCreate() {
  }
  onInput(input) {
    const now = new Date().toString();
    this.timer = setInterval(this.timeDown.bind(this), 1000)

    this.state = {
      time: '',
      list: [
        {title: 'Affordable Protection Plans', subtitle: 'Sava up to 50% when you buy online from Alstate.'},
        {title: '100% of covered repair costs', subtitle: 'Covered everything from your steering and transmission, down to the fancy tech inside your touchscreen. All you pay is a $50 deductible.'},
        {title: 'Repair Anywhere', subtitle: 'You choose your mechanic, and we pay them derectly for repairs, so you aren`t stuck chasing down reimbursements.'},
      ],
    };
  }
  handleKeydown(e) {
    console.log(e);

    if (e.key === "Enter") {
      console.log(e.target.value);
      clearInterval(this.timer);
      this.time = e.target.value;
      this.timer = setInterval(this.timeDown.bind(this), 1000);
    }
  }

  timeDown() {
    const startTime = this.time || '2024-5-19 21:00:00';
    const startT = dayjs(startTime);
    const endT = dayjs();
    const diff = endT.diff(startT); // 时间差

    if (endT - startT > 0 || !startT.isValid()) {
      this.state.time = '00:00:00';
      clearInterval(this.timer);
      this.timer = null;
      this.time = '';
      return;
    }

    const diffHours = Math.abs(Math.ceil(dayjs.duration(diff).asHours()));
    const diffMinutes = Math.abs(dayjs.duration(diff).minutes());
    const diffSeconds = Math.abs(dayjs.duration(diff).seconds());
    const milliseconds = Math.abs(dayjs.duration(diff).milliseconds());

    // const timeStr = `${diffHours < 10 ? `0${diffHours}:` : diffHours}${diffMinutes < 10 ? `0${diffMinutes}` : diffMinutes}:${
    //   diffSeconds < 10 ? `0${diffSeconds}` : diffSeconds}:${milliseconds < 10 ? `0${milliseconds}` : milliseconds}`;
      const timeStr = `${diffHours < 10 ? `0${diffHours}` : diffHours}:${diffMinutes < 10 ? `0${diffMinutes}` : diffMinutes}:${
        diffSeconds < 10 ? `0${diffSeconds}` : diffSeconds}`;
    // 格式化为需要的格式 这里是时分秒
    console.log(timeStr);
    this.state.time = timeStr;
    // console.log(
    //   dayjs.duration(diff).format('HH:mm:ss')
    // );
  }
};