const {ApolloServer, gql}=require('apollo-server');

const typeDefs=gql`
schema{
    query:Query
}
type Query{
    holamundo:String
}
`;

const resolvers={
    Query:{
        holamundo:()=>"holamundo"
    }
}

const server=new ApolloServer({typeDefs, resolvers});
server.listen({port:9000}).then(({url})=>console.log("working in port 9000"));