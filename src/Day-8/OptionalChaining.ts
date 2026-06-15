// Problem 30: Optional Chaining & Nullish Coalescing  [Easy]
// Description: Given a nested object that may have missing properties, safely access a deeply nested value using optional chaining (?.) and provide a default using nullish coalescing (??).

type UserSettings = {
    profile?: {
        theme?: string;
        notifications?: {
            email?: boolean;
        }
    }
};

function optionalChaining(user: UserSettings): string {
    if (user.profile && user.profile.notifications && user.profile.notifications.email !== undefined) {
        return `Status: ${user.profile.notifications.email}`;
    }
    return "not set";
}

const userB = { profile: {
    theme: "dark",
    notifications: {
        email: true,
    }
} };
console.log(optionalChaining(userB)); 
