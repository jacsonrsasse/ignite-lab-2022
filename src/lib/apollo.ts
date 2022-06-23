import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ovtamq16ik01ywflcrg5nf/master",
    cache: new InMemoryCache(),
});
