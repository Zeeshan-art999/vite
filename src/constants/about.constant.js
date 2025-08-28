import webImage from "../assets/images/icon-dev.svg";
import MobileImage from "../assets/images/icon-app.svg";
import PhotographImage from "../assets/images/icon-photo.svg";
import webDesignImage from "../assets/images/icon-design.svg";
import logo2 from '../assets/images/logo-2-color.png'
import logo3 from '../assets/images/logo-3-color.png'
import logo4 from '../assets/images/logo-4-color.png'
import logo5 from '../assets/images/logo-5-color.png'
import logo6 from '../assets/images/logo-6-color.png'
import Avator1 from '../assets/images/avatar-1.png'
import Avator2 from '../assets/images/avatar-2.png'
import Avator3 from '../assets/images/avatar-3.png'
import Avator4 from '../assets/images/avatar-4.png'

const services = [
    {
        title: "Web Development",
        description: "High-quality development of sites at the professional level.",
        image: webImage
    }, {
        title: "Mobile app",
        description: "Professional development of applications for iOS and Android.",
        image: MobileImage
    }, {
        title: "Photography",
        description: "I make high-quality photos of any category at a professional level.",
        image: PhotographImage
    }, {
        title: "Web Design",
        description: "The most modern and high-quality design made at a professional level",
        image: webDesignImage
    }]
const clientlogos = [
    logo2, logo3, logo4, logo5, logo6
]

const testimonials = [{
    name: "Daniel lewis",
    avatar: Avator1,
    review: "Richard was hired to create a corporate identity. We were very pleased with the work done. She ha lot of experienceand is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididtconsectetur adipisc elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
}, {
    name: "Jessica miller",
    avatar: Avator2,
    review: "Richard was hired to create a corporate identity. We were very pleased with the work done. She ha lot of experienceand is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididtconsectetur adipisc elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
}, {
    name: "Michael davis",
    avatar: Avator3,
    review: "Richard was hired to create a corporate identity. We were very pleased with the work done. She ha lot of experienceand is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididtconsectetur adipisc elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
}, {
    name: "Stevan smith",
    avatar: Avator4,
    review: "Richard was hired to create a corporate identity. We were very pleased with the work done. She ha lot of experienceand is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididtconsectetur adipisc elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
}
]

export { services, clientlogos, testimonials }