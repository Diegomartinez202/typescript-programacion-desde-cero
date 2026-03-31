console.log("Hello, Typescript");

type User = {
    id: number;
    name: string;
    email: string;
};

const user: User = {
    id: 1,
    name: "John Doe",
    email: "jhon.@example.com"
};
const user2: User = {
    id: 2,
    name: "Jane Doe",
    email: "jane.@example.com"
};
console.log(user);

function getUser(id: number): User | undefined {
    if (id === user.id){
        return user;
    }
   return undefined;
    }
console.log(getUser(1));
console.log(getUser(2));
