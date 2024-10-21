import { FeedPost } from "../../../utils/posts/post.types";
import { User } from "../../../utils/user/user.types";

const spacexUser: User = {
    gender: "male",
    name: {
        title: "Mr.",
        first: "Space",
        last: "X"
    },
    location: {
        street: {
            number: 1,
            name: "Tesla Rd"
        },
        city: "Austin",
        state: "Texas",
        country: "USA",
        postcode: 73301,
        coordinates: {
            latitude: "30.2672",
            longitude: "-97.7431"
        },
        timezone: {
            offset: "-6:00",
            description: "Central Standard Time"
        }
    },
    email: "sapce.x@tesla.com",
    login: {
        uuid: "123e4567-e89b-12d3-a456-426614174000",
        username: "spaceX",
        password: "securePassword123!",
        salt: "somesalt",
        md5: "5d41402abc4b2a76b9719d911017c592",
        sha1: "c4ca4238a0b583b4a635e8e5a95a3d9e",
        sha256: "6dcd4ce23d88e2ee9568ba546c007c63a4a3a9281c90b96d0671b9a5692b0e68"
    },
    dob: {
        date: "1971-06-28T00:00:00Z",
        age: 52
    },
    registered: {
        date: "2010-07-20T00:00:00Z",
        age: 14
    },
    phone: "+1-512-123-4567",
    cell: "+1-512-987-6543",
    id: {
        name: "SSN",
        value: "123-45-6789"
    },
    picture: {
        large: "https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg",
        medium: "https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg",
        thumbnail: "https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg"
    },
    nat: "US",
    isFollowed: true,
    sectionName: "Tech Innovators",
    isVerified: true,
    isAfiliated: false,
    description: "CEO of SpaceX and Tesla, known for revolutionary ideas in technology and space exploration.",
    social: {
        following: 10000000,
        followers: 150000000
    },
    
}


export const spacexPosts: FeedPost[] = [
    {
        id: "1",
        text: "¡SpaceX ha lanzado con éxito el cohete Falcon 9 hacia la Estación Espacial Internacional!",
        image: "https://alpha.creativecirclecdn.com/environment/original/20240617-180945-66b-spacex-ptd-itdrcjm-unsplash.jpg",
        comments: [],
        likes: 150,
        replies: 25,
        impressions: 2000,
        isLiked: true,
        user: spacexUser
    },
    {
        id: "2",
        text: "¡Starship se prepara para su próximo vuelo de prueba! Esperamos grandes cosas.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Full_Stack_starship.jpg",
        comments: [],
        likes: 200,
        replies: 30,
        impressions: 2500,
        isLiked: false,
        user: spacexUser
    },
    {
        id: "3",
        text: "SpaceX ha firmado un nuevo contrato con la NASA para misiones futuras en la Luna.",
        image: "https://blogs.nasa.gov/spacex/wp-content/uploads/sites/227/2022/04/52028779376_a7046cebb9_k.jpg?resize=1024,652",
        comments: [],
        likes: 300,
        replies: 40,
        impressions: 3500,
        isLiked: true,
        user: spacexUser
    },
    {
        id: "4",
        text: "¡El lanzamiento de Starlink se realizó con éxito! Más de 100 satélites en órbita.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Starlink_Mission_%2847926144123%29.jpg",
        comments: [],
        likes: 250,
        replies: 15,
        impressions: 1800,
        isLiked: false,
        user: spacexUser
    },
    {
        id: "5",
        text: "El próximo vuelo de Crew Dragon está programado para el próximo mes. ¡Sigue la cuenta atrás!",
        image: "https://media.es.wired.com/photos/64f76b704886e9e59be44b06/master/w_1920,c_limit/Dragon%20SpaceX%20crew-6.jpg",
        comments: [],
        likes: 175,
        replies: 10,
        impressions: 2200,
        isLiked: true,
        user: spacexUser
    }
]
