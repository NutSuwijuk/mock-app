import TestAPIDetail from "@/components/TestAPI/TestAPIDetail";
import TestAPI from "@/services/TestAPI/testapi.service";

interface Slug {
    slug: string;
}


export default async function DetailAPI({params}:{params: Promise<Slug>}) {
    const { slug } = await params;
    const detailAPISevice = new TestAPI();
    const response = await detailAPISevice.listDetail(slug??"");
    // const data={response}
    // const props = props.data
    console.log("Users API",response);
    return <TestAPIDetail data={response}/>
    
    // if (response.length > 0) {
    //     return <TestAPIDetail data={response[0]} />;
    // } else {
    //     return <div>No data available</div>;
    // }
}