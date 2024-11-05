import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: '#home', label: 'Home'},
    { href: '#about-us', label: 'About-Us'},
    { href: '#products', label: 'Products'},
    { href: '#contact-us', label: 'Contact-Us'},
    
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands'},
    { value: '500+', label: 'Shops'},
    { value: '250k+', label: 'Customers'},
];

export const products = [
    {
        imgURL: shoe4,
        name: 'Nike Air Jordan-01',
        price: "3199",
    },
    {
        imgURL: shoe5,
        name: 'Nike Air Jordan-10',
        price: '3499',
    },
    {
        imgURL: shoe6,
        name: 'Nike Air Jordan-100',
        price: '3799',
    },
    {
        imgURL: shoe7,
        name: 'Nike Air Jordan-001',
        price: '3999',
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: 'Free shipping',
        subtext: 'Enjoy seamless shopping with our complimentary shipping service.',    
    },
    {
        imgURL: shieldTick,
        label: 'Secure Payment',
        subtext: 'Experience worry-free transactions with our secure payment options.',    
    },
    {
        imgURL: support,
        label: 'Love to help you',
        subtext: 'Our dedicated team is here to assist you every step of the way.',    
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Jesse Pinkman',
        rating: 4.5,
        feedback: "Yo, these kicks are tight! It's like I'm flying, man. Nike's got some serious science going on - smoother than Heisenberg's product, no doubt. Best buy for real, yo!"
    },
    {
        imgURL: customer2,
        customerName: 'Jane Margolis',
        rating: 4.7,
        feedback: "These shoes? Yeah, they're art. Sleek, bold, and unapologetic - just the way I like it. Nike's not just making shoes, they're making statements."
    }
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", links: "/"},
            { name: "Air Max 1", links: "/"},
            { name: "Air Jordan 1", links: "/"},
            { name: "Air Force 2", links: "/"},
            { name: "Nike Waffle Racer", links: "/"},
            { name: "Nike Cortez", links: "/"},
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", links: "/"},
            { name: "FAQs", links: "/"},
            { name: "How it works", links: "/"},
            { name: "Privacy policy", links: "/"},
            { name: "Payment policy", links: "/"},
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", links: "mailto:customer@nike.com"},
            { name: "+918610595258", links: "tel:+918610595258"},
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo"},
    { src: twitter, alt: "twitter logo"},
    { src: instagram, alt: "instagram logo"},
];

