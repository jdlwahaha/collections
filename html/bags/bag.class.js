class Bag {

    name;
    filename;
    price;
    rating;
    review;

    constructor(name, filename, price, rating, review) {
        this.name = name;
        this.filename = filename;
        this.price = price;

        this.rating = rating;
        this.review = review;
    }

    getHtml() {
        return `
            <span class="bag">
                <img class="thumbnail" src="../../data/bags/images/low/${this.filename}.jpeg" width="350"/>
                <div class="bold">${this.name}</div>
                <div class="green priceRate">
                    ${readablePrice(this.price)}
                </div>
                <div class="gold">${this.#getRating(this.rating)}</div>
                <p style="width: 350px;" class="grey">
                    ${this.review}
                </p>
            </span>
        `;
    }

    #getRating(number) {
        let html = '';
        for (let i = 0; i < 5; i++) {
            if (i < number) {
                html += '&#9733;'
            } else {
                html += '&#9734;'
            }
        }
        return html;
    }
}
