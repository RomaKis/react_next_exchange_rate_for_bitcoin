import styles from './../scss/Currencies.module.scss';

const Currencies = ({currentPrice}) => {
    if (!currentPrice) {
        return <h1>Some ERROR with api. Nothing to show.</h1>
    }

    const mainCurrencyName = currentPrice.chartName;
    const currencies = currentPrice.bpi;

    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <h1 className={styles.title}>Exchange for {mainCurrencyName}:</h1>
                <ul className={styles.currenciesList}>
                    {Object.keys(currencies).map((currency, index) =>
                        <li key={currencies[currency].code}>
                            <span>{currencies[currency].code}</span>&nbsp;
                            <span className={styles.description}>{currencies[currency].description}</span>&nbsp;
                            <span>{currencies[currency].rate_float}</span>&nbsp;
                            <span dangerouslySetInnerHTML={{__html: currencies[currency].symbol}}></span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
};

export default Currencies;


