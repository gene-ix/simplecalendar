function Calendar(prop) {

    let now = prop.date;
    let thisyear = now.getFullYear();
    let thismonth = now.getMonth();
    let today = now.getDate();

    let weeks = [[], []];

    for (let val of weeks) {
        let firstdaythismonth = new Date(thisyear, thismonth, 1);
        let lastdaythismonth = new Date(thisyear, thismonth + 1, 0);
        let index = 1 - firstdaythismonth.getDay();

        for (let j = 0; j < 6; j++) {

            let days = [];
            for (let k = 0; k < 7; k++) {
                days.push(
                    <div className="_day" id={(index == today) ? "_today" : ""}>
                        {(index > 0 && index <= lastdaythismonth.getDate()) ? index : ""}
                    </div>
                );
                index++;
            }

            val.push(
                <div className="_week">{days}</div>
            );
        }
        thismonth++;
    }

    return (
        <div className="_row" id="_calendar">
            <div className="_col" id="_thismonth">
                <div className="_calendarbody">
                    {weeks[0]}
                </div>
            </div>
            <div className="_col" id="_nextmonth">
                <div className="_calendarbody">
                    {weeks[1]}
                </div>
            </div>
        </div>
    );
}

export default Calendar;