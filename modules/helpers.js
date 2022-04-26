const feed = {
    getInsult: async function getInsult() {
        const response = await fetch(`https://evilinsult.com/generate_insult.php?lang=en&type=json`);
        const result = await response.json();
        // console.log(result)
        return result.insult;
    },
    // addDelivery: async function addDelivery(delivery: Delivery) {
    //     try {
    //         delivery.api_key = config.api_key;
    //         await fetch(`${config.base_url}/deliveries`, {
    //             body: JSON.stringify(delivery),
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             method: 'POST'
    //         });
    //     } catch (error) {
    //         console.log("Could not add delivery:", delivery)
    //     }
    // },
};

export default feed;
