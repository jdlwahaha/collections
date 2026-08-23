function getMyBags() { 
    const coach = [
        new Bag(
            "Coach - Turnlock Crossbody Bag (White)",
            "coach-turnlock-crossbody-bag-white",
            167.99,
            5,
            ` Love this! It's creamy white that makes dirt less visible than paper white.
              It contains all the pockets that I need for my daily carries.
              The strap is also very comfortable to wear. It's easily my go-to.
            `,
        ),
        new Bag(
            "Coach - Mini Carey (Powder Pink)",
            "coach-pink-mini-jamie",
            222.88,
            5,
            ` Love this strawberry colour! Powder pink is really cute in person even though it's not my style. 
              I will unlikely wear it outside, but happy to add it to the collection. 
              Brings a smile to my face every time I see it.`,
        ),
        new Bag(
            "Coach - Mini Jamie (Signature Canvas)",
            "coach-signature-canvas-cream",
            145.59,
            4,
            ` I bought it intended for daily wear. It has all the pockets that I need, 
              but the outer pocket ended up being too small for my phone.
              The colour pattern doesn't really fit my style, but it does work well with formal occasions.`,
        ),
        new Bag(
            "Coach Charms",
            "coach-charms",
            110,
            0,
            ` These two charms were half off around $50 each. 
              Rowan is cute, but it's not my style to wear and is too expensive to be a decor for me. 
              Getting the charms is my way to support the bags.`
        ),
    
    ];
    
    const bags = [
        new Bag(
            "Calvin Klein - Shoulder Bag",
            "ck-shoulder-bag",
            111.99,
            2,
            `I don't remember why I liked it. The colour looks good, but definitely not my style and not worth $100+.`,
        ),
        new Bag(
            "Aldo - Hand Bag (Yellow)",
            "aldo-yellow-bag",
            55.99,
            4,
            ` Love this sunset yellow colour with gold hardwares! It is a proper bag with metal feet!
              It came with a $5 bill inside the zipper pocket so it's likely a returned item.
              The logo tag is also missing a screw.
              It's not my style, but defiinitely my yellow and happy to add it to the collection!`,
        ),
        new Bag(
            "Steve Madden - Fake Mini Kelly",
            "sm-mini-kelly",
            55.99,
            3,
            `   Bought it as a decor because the 3-tone-chocolate colour is so cute. 
                It looks like a mini kelly, but there's no way I will ever spend that amount on a bag. 
                Looking back though, $50+ for this bag is a bit high too since the material is not the best. `,
        ),
        new Bag(
            "Roots - Shoulder Bag (Cognac)",
            "roots-shoulder-bag-cognac",
            55.99,
            3,
            ` Not really my style and bought it originally for formal situations such as weddings. 
              Good brown colour match with my Tissot le Locle. However, it turned out not looking formal enough.`,
        ),
        new Bag(
            "Puma - Ferrari Sptwr Style",
            "puma-ferrari",
            22.39,
            5,
            `  Cool and definitely my style! Unfortunately it does not enough pockets
               and strap is not comfortable, but was close to what I need and price was unbeatable.
               Great replacement for my Bench bag.`
        )
    ];
    
    const backpack = [
        new Bag('Mountain Warehouse - Pace 12 (Yellow)',
            'moutain-warehouse-pace-12-yellow',
            33.59,
            4,
            ` It looks great in colour and is perfect for my size. 
              It's a very functional bag with all the pockets and room needed for climbing, 
              but the chance of me doing outdoor activies is slim.
              Great yellow regardless.`
        ),
    ];
    
    
    return [...coach, ...bags, ...backpack];
    
}


