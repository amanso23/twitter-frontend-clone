import { User } from "../../../utils/user/user.types";

export const loggedUser: User = {
    gender: "male",
    name: {
        title: "Mr.",
        first: "Elon",
        last: "Musk"
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
    email: "elon.musk@tesla.com",
    login: {
        uuid: "123e4567-e89b-12d3-a456-426614174000",
        username: "elonmusk",
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
        large: "https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png?s=200",
        medium: "https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png?s=200",
        thumbnail: "https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png?s=200"
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
};
