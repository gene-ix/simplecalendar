function TextDate(prop) {

    const ZeroPadding = (val) => {
        return ("00" + val).slice(-2);
    };

    const mon = ZeroPadding(prop.date.getMonth() + 1);
    const day = ZeroPadding(prop.date.getDay());

    return (
        <div className="_row" id="_textdate">
            <div>{mon}</div>
            <div>{day}</div>
        </div>
    );
}

export default TextDate;