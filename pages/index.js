
import Currencies from "./currencies";

const Index = ({currentPrice}) => {
    return (
        <div>
            <Currencies currentPrice={currentPrice}/>
        </div>
    )
};

export default Index;

export async function getStaticProps(context) {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

    let currentPrice  = await response.json();

    if (!currentPrice) {
        currentPrice = {};
    }

    return {
        props: {currentPrice},
    }
}

