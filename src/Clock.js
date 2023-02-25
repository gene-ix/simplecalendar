function Clock(prop) {

    const ZeroPadding = (val) => {
        return ("00" + val).slice(-2);
    };

    const hrs = ZeroPadding(prop.date.getHours());
    const min = ZeroPadding(prop.date.getMinutes());

    return (
        <div className="_row" id="_clock">
            <div>{hrs}</div>
            <div>{min}</div>
        </div>
    );
}

export default Clock;