<template>
    <Nav />
    <div class="paymentdiv ">
        <div class="paymenthead ">
            Checkout
        </div>
        <div class="cardsdiv">
            <div class="card">
                <div class="cardhead">
                    1. User's Details
                </div>
                <span class="carddetail">
                    Parul Giri

                    House no. 24

                    Vill Bharampur

                    ROORKEE, UTTARAKHAND 247667
                </span>
            </div>
            <div class="card">
                <div class="cardhead">
                    2. Select a payment method
                </div>
                <span class="carddetail">
                    Parul Giri

                    House no. 24

                    Vill Bharampur

                    ROORKEE, UTTARAKHAND 247667
                </span>
            </div>

        </div>
    </div>
</template>
  
<script>

export default {
    props: [
        'total'
    ],
    async asyncData(data) {
        console.log(data);
    },
};
</script>
  
<style>
.paymentdiv {
    background-color: #FDF9EA;
    height: 100%;
    min-height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
}


.paymenthead {
    width: 100vw;
    height: 25vh;
    padding-bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 3rem;
    color: white;
    background-color: #322C2C;
}

.cardsdiv {
    margin: 5% 0;
    width: 40%;
    height: 100%;
    background-color: transparent;

}

.card {
    background-color: transparent;
    border: none;
    margin: 2% 0;
    height: 50%;
}

.cardhead {
    padding-left: 1rem;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    font-size: 1.5rem;
    font-weight: 600;
    color: #D3A466;
    align-items: center;
    background: #FDF9EA;
    border: 1px solid #000000;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
}

.carddetail {
    padding: 2% 10%;
    width: 60%;
    height: 10rem;
    font-weight: 400;
    font-size: 21px;
    line-height: 1.5;
    /* or 16px */

}
</style>
  