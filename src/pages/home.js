// export const  menu =() => {
//     return <h1>this is home page</h1>
//     }
import { useQuery } from "@tanstack/react-query"; 
import Axios from "axios";
export const Home = () => {
const {
data: catData,
isLoading,
isError,
refetch,
} = useQuery({
queryKey: ["cat"],
queryFn: async () => {
return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
}
});
if (isError) {
return <h1>Sorry, there was an error</h1>;
}
if (isLoading) {
return <h1>Loading...</h1>;
}
return <div>{catData?.fact}</div>;
}
// export const  menu =() => {
//     return <h1>this is home page</h1>
//     }
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const home = () => {
const {
data: catData,
isLoading,
isError,
refetch,
} = useQuery({
queryKey: ["cat"],
queryFn: async () => {
return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
}
});
if (isError) {
return <h1>Sorry, there was an error</h1>;
}
if (isLoading) {
return <h1>Loading...</h1>;
}
return (
<div>
<h1>This is the home page</h1>
<p>{catData?.fact}</p>
<button onClick={refetch}>Update Data</button>
</div>
);
};